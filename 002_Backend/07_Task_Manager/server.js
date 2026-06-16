const db = require("./database");

const express = require ("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/tasks", (req, res) => {
    const tasks = db.prepare("SELECT * FROM tasks").all();

    res.status(200).json({
        tasks: tasks
    });
});

app.post("/tasks", (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    const result = db
        .prepare(`
            INSERT INTO tasks (title, description)
            VALUES (?, ?)
        `)
        .run(title, description);

    res.status(201).json({
        taskId: result.lastInsertRowid
    });
});

app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (status !== "completed" && status !== "pending") {
        return res.status(400).json({
            error: "Invalid status"
        });
    }

    const result = db
        .prepare(`
            UPDATE tasks
            SET status = ?
            WHERE id = ?
        `)
        .run(status, id);

    if (result.changes === 0) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.status(200).json({
        message: "Task updated successfully"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});