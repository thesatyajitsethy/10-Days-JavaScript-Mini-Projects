// Password Generator

function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(`Generated Password: ${password}`);
  }
  
  generatePassword(12); // Change length as needed
  