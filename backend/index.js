const express = require('express');
const app = express();
const PORT = 3000;


//Simulating data from the DB.
const data =
    [{  id: "q1",
        name: "How does billing work?",
        description: "We charge a flat rate for each project. You can find more details in our pricing page."
    },
    {id: "q2",
        name: "What is pay per trip car insurance?",
        description: "We charge a flat rate for each project. You can find more details in our pricing page."
    },
    {  id: "q1",
        name: "Can i insure myself during my journey?",
        description: "We charge a flat rate for each project. You can find more details in our pricing page."
    },
    {id: "q2",
        name: "Does Guliva offer monthly car insurance?",
        description: "We charge a flat rate for each project. You can find more details in our pricing page."
    },
    {  id: "q1",
        name: "How can Gulliva offer cheap car insurance?",
        description: "We charge a flat rate for each project. You can find more details in our pricing page."
    },
    {id: "q2",
        name: "Do you offer full coverage?",
        description: "We charge a flat rate for each project. You can find more details in our pricing page."
    }
]

// Middleware to parse JSON
app.use(express.json());


app.get('/accordion', (req, res) => {
    res.send(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

