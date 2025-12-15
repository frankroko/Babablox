<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>สมัครสมาชิก - Babablox</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>

<header>
    <h1>Babablox</h1>
    <p>สมัครสมาชิกเพื่อเริ่มใช้งาน</p>
</header>

<section class="form-section">

    <form class="order-form">

        <label>ชื่อผู้ใช้</label>
        <input type="text" placeholder="ชื่อผู้ใช้ของคุณ" required>

        <label>อีเมล</label>
        <input type="email" placeholder="example@gmail.com" required>

        <label>รหัสผ่าน</label>
        <input type="password" placeholder="ตั้งรหัสผ่าน" required>

        <label>ยืนยันรหัสผ่าน</label>
        <input type="password" placeholder="กรอกซ้ำอีกครั้ง" required>

        <button type="submit" class="submit-btn">สมัครสมาชิก</button>

        <p class="switch-page">
            มีบัญชีอยู่แล้ว?  
            <a href="login.html">เข้าสู่ระบบ</a>
        </p>

    </form>

</section>


</body>
</html>
