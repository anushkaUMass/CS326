// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as db from './db.js';



const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the API Server');
});

app.use(cors());
app.use(bodyParser.json());

db.createUser('user1@example.com', 'pass');
// new user
// server.js

// POST route to create user
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await db.createUser(email, password);
        if (result.status === 'success') {
            res.status(201).json({ message: result.message });
        } else {
            res.status(409).json({ message: result.message });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// POST route to authenticate user
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.authenticateUser(email, password);
        if (user) {
            res.json({ message: "Login successful", user: email });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
});



// GET route to retrieve a user's bucket list
app.get('/bucketlist/:username', async (req, res) => {
    try {
        const bucketList = await db.getBucketList(req.params.username);
        res.status(200).json(bucketList);
    } catch (error) {
        res.status(404).send('User not found');
    }
});

app.post('/add/:email', async (req, res) => {
    const email = req.params.email;
    const { name, address } = req.body;

    try {
        const result = await db.addBucketListItem(email, name, address);
        if (result.ok) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(200).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
    res.end();
});


app.get('/bucketlist/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const bucketList = await db.getBucketList(email);
        res.status(200).json(bucketList);
    } catch (error) {
        res.status(404).send('User not found');
    }
    res.end();
});

// UPDATE route to update a bucket list item
app.put('/bucketlist/:username/:index', async (req, res) => {
    const { username, index } = req.params;
    const { newItem } = req.body;
    try {
        const result = await db.updateBucketListItem(username, parseInt(index), newItem);
        if (result.status === 'success') {
            res.status(200).json({ message: result.message });
        } else {
            res.status(400).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update item", error: error.message });
    }
});

// DELETE route to delete a bucket list item
app.delete('/bucketlist/:username/:index', async (req, res) => {
    const { username, index } = req.params;
    try {
        const result = await db.deleteBucketListItem(username, parseInt(index));
        if (result.status === 'success') {
            res.status(200).json({ message: result.message });
        } else {
            res.status(400).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete item", error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
