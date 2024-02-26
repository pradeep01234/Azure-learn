let execute =async ()=>{
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const job_role = document.getElementById("job_role").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;
    const date = document.getElementById("date").value;
    const uplode = document.getElementById("uplode").value;

    let response = await fetch("http://localhost:8000/register",{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            job_role: job_role,
            address: address,
            city: city,
            pin: pin,
            date: date
        })
    })
    console.log(first_name);
    console.log(response);

    alert("working")
    return true;
}