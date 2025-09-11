var employeinfo = {
  "employees": [
    {
      "id": 1,
      "name": "Rahul Sharma",
      "age": 28,
      "department": "Software Development",
      "position": "Frontend Developer",
      "email": "rahul.sharma@example.com",
      "salary": 55000
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "age": 32,
      "department": "Human Resources",
      "position": "HR Manager",
      "email": "priya.verma@example.com",
      "salary": 60000
    },
    {
      "id": 3,
      "name": "Arjun Mehta",
      "age": 26,
      "department": "IT Support",
      "position": "System Administrator",
      "email": "arjun.mehta@example.com",
      "salary": 48000
    },
    {
      "id": 4,
      "name": "Sneha Kapoor",
      "age": 29,
      "department": "Finance",
      "position": "Accountant",
      "email": "sneha.kapoor@example.com",
      "salary": 52000
    }
  ]
}


const refdata = document.getElementById("data");
let str = JSON.stringify(employeinfo,null,2)
refdata.innerHTML = `<pre>
                            ${str}
                    </pre>`

                
refdata.innerHTML = `<pre>
                            ${JSON.parse(str,null,2)}
                    </pre>`

                