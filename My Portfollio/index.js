    const mailForm = document.querySelector("form");
    const submit = document.querySelector(".submit");

    const sendMail = () => {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const mobileNumber = document.querySelector("#phno").value;
        const message = document.querySelector("textarea").value;

        const emailMessage = {
            Host: "smtp.elasticemail.com",
            Username: "rakeshkumarsahu810@gmail.com", 
            Password: "430D0A3CE7D086B69AACB364941D61B81056",
            To: "rakeshkumarsahu810@gmail.com",
            From: email,
            Subject: "Message from Portfolio Contact Form",
            Body: `Name: ${name}<br>Email: ${email}<br>Mobile Number: ${mobileNumber}<br>Message: ${message}`
        };

        
        Email.send(emailMessage)
        .then(() => {
            alert("Massage is recieved");
        });
    };

    
    mailForm.addEventListener("submit", function(e) {
        e.preventDefault();
        sendMail(); 
    });


    const links=document.querySelectorAll(".linkvalue")
    links.forEach((link)=>{
        link.addEventListener("click",(e)=>{
            e.preventDefault()
            window.open(e.target.getAttribute("href"))
        })
    })
