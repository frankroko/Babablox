import React from 'react';
import './Product.css';

const order = (productName, price) => {
    const message = `สวัสดีครับ/ค่ะ ผม/ฉันสนใจสั่งซื้อ ${productName} ราคา ${price} บาทครับ/ค่ะ`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '0912345678';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }

const Product = () => {
return(
<section className="products-section">
        <h2>รายการรหัส Roblox</h2>

        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://tr.rbxcdn.com/1cfa5d4f39ea32f69aed0b8b1be44668/768/432/Image/Webp"
              alt="Roblox Account"
            />
            <h3>รหัส ไก่ตัน Blox fruit</h3>
            <p className="desc">ไอดียังไม่เชื่อม พร้อมเปลี่ยนข้อมูล</p>
            <p className="price">ราคา: 19 บาท</p>
            <button onClick={() => order('รหัส ไก่ตัน Blox fruit', 19)}>สั่งซื้อ</button>
          </div>

          <div className="product-card">
            <img
              src="https://tr.rbxcdn.com/2a7071f3af8b671c5f3cf1911091cf07/768/432/Image/Webp"
              alt="Roblox Premium"
            />
            <h3>รหัส Roblox Premium</h3>
            <p className="desc">มี Robux คงเหลือ + เปลี่ยนรหัสได้</p>
            <p className="price">ราคา: 149 บาท</p>
            <button onClick={() => order('รหัส Roblox Premium', 149)}>สั่งซื้อ</button>
          </div>

          <div className="product-card">
            <img
              src="https://tr.rbxcdn.com/3f0b554b1f41f54c74fd4e64ee81a711/768/432/Image/Webp"
              alt="Random Roblox Account"
            />
            <h3>รหัสสุ่ม Roblox</h3>
            <p className="desc">สุ่มบัญชี (ดวงดีได้ Robux!)</p>
            <p className="price">ราคา: 59 บาท</p>
            <button onClick={() => order('รหัสสุ่ม Roblox', 59)}>สั่งซื้อ</button>
          </div>
        </div>
      </section>
)
}

export default Product;