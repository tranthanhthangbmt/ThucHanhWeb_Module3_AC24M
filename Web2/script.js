// Car Data
const cars = [
    {
        id: 1,
        name: "Toyota Vios 2018 E CVT",
        price: "385.000.000 ₫",
        image: "https://images.unsplash.com/photo-1623961990059-28356e22bc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder
        year: 2018,
        odo: "45.000 km",
        transmission: "Tự động",
        fuel: "Xăng",
        description: `🔥 TOYOTA VIOS 2018 - BỀN BỈ, TIẾT KIỆM, CHUẨN XE GIA ĐÌNH 🔥

🚗 Bạn đang tìm kiếm chiếc xe đầu đời? Một người bạn đồng hành tin cậy, "nồi đồng cối đá"? Đừng bỏ qua siêu phẩm Vios 2018 này!

✅ Máy móc nguyên zin 100%: Cam kết chưa qua sửa chữa lớn, bao thợ thầy test thoải mái. Động cơ êm ái, vận hành mượt mà.
✅ Điều hòa mát lạnh: Thách thức mọi nắng nóng mùa hè, bước vào xe là thấy sảng khoái ngay lập tức.
✅ Chuẩn cho người mới lái: Vô lăng nhẹ nhàng, tầm nhìn thoáng, dễ dàng xoay trở trong phố đông đúc.
✅ An tâm tuyệt đối: Xe đã qua 100 điểm kiểm tra kỹ thuật nghiêm ngặt bởi đội ngũ kỹ sư ô tô. Không đâm đụng, không ngập nước.

💰 Giá cực yêu thương cho anh em thiện chí. Liên hệ ngay để ép giá!`,
        checklist: [
            "Động cơ nguyên bản", "Hộp số mượt mà", "Khung gầm chắc chắn", "Không đâm đụng",
            "Không ngập nước", "Điện thân vỏ ổn định", "Nội thất sạch sẽ", "Lốp còn mới 80%",
            "Pháp lý rõ ràng", "Đủ 2 chìa khóa"
        ]
    },
    {
        id: 2,
        name: "Mazda 3 2020 Luxury",
        price: "560.000.000 ₫",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2020,
        odo: "32.000 km",
        transmission: "Tự động",
        fuel: "Xăng",
        description: "Mazda 3 thiết kế KODO trẻ trung, option miên man. Xe một chủ từ đầu, bảo dưỡng hãng đầy đủ. Cam kết không tua ODO.",
        checklist: [
            "Sơn zin 95%", "Máy móc êm ru", "Điện tử hoạt động tốt", "Gầm bệ không rỉ sét",
            "Ghế da chưa nhăn", "Vô lăng chắc tay", "Đèn pha sáng rõ", "Phanh ABS chuẩn",
            "Túi khí an toàn", "Giấy tờ chính chủ"
        ]
    },
    {
        id: 3,
        name: "Hyundai Accent 2021 AT",
        price: "450.000.000 ₫",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2021,
        odo: "28.000 km",
        transmission: "Tự động",
        fuel: "Xăng",
        description: "Accent form mới cực đẹp, tiết kiệm xăng. Xe gia đình sử dụng kỹ, nội thất còn mùi xe mới. Bao test hãng toàn quốc.",
        checklist: [
            "Keo chỉ nguyên zin", "Máy số chưa hạ", "Điều hòa sâu", "Màn hình cảm ứng nhạy",
            "Loa nghe hay", "Cửa đóng chắc nịch", "Kính chưa xước", "Lốp sơ cua chưa hạ",
            "Đăng kiểm còn dài", "Bảo hiểm thân vỏ"
        ]
    }
];

// DOM Elements
const carList = document.getElementById('car-list');
const modal = document.getElementById('car-modal');
const modalContent = document.getElementById('modal-body-content');
const closeModal = document.querySelector('.close-modal');

// Render Cars
function renderCars() {
    carList.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <span class="car-badge">Đã kiểm định</span>
            </div>
            <div class="car-info">
                <h3 class="car-title">${car.name}</h3>
                <p class="car-price">${car.price}</p>
                <div class="car-specs">
                    <span><i class="fa-solid fa-calendar-days"></i> ${car.year}</span>
                    <span><i class="fa-solid fa-gauge-high"></i> ${car.odo}</span>
                    <span><i class="fa-solid fa-gears"></i> ${car.transmission}</span>
                </div>
                <p class="car-desc-preview">${car.description}</p>
                <button class="btn btn-primary" style="width: 100%; margin-top: 15px;" onclick="openModal(${car.id})">
                    Xem chi tiết
                </button>
            </div>
        </div>
    `).join('');
}

// Open Modal
window.openModal = function(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;

    modalContent.innerHTML = `
        <div class="modal-grid">
            <div class="modal-left">
                <img src="${car.image}" alt="${car.name}" class="modal-img" style="border-radius: 12px;">
            </div>
            <div class="modal-info">
                <h2 class="modal-title">${car.name}</h2>
                <p class="modal-price">${car.price}</p>
                
                <div class="car-specs" style="margin-bottom: 20px;">
                    <span><i class="fa-solid fa-calendar-days"></i> Năm: ${car.year}</span>
                    <span><i class="fa-solid fa-gauge-high"></i> ODO: ${car.odo}</span>
                    <span><i class="fa-solid fa-gas-pump"></i> Nhiên liệu: ${car.fuel}</span>
                </div>

                <div class="modal-desc">
                    ${car.description}
                </div>

                <div class="checklist-box">
                    <div class="checklist-title">
                        <i class="fa-solid fa-clipboard-check"></i> 
                        Check-list 100 Điểm Kỹ Thuật (Đã Duyệt)
                    </div>
                    <div class="checklist-items">
                        ${car.checklist.map(item => `
                            <div class="check-item">
                                <i class="fa-solid fa-circle-check"></i> ${item}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button class="btn btn-primary btn-lg" style="flex: 1;">Liên hệ mua ngay</button>
                    <button class="btn btn-outline btn-lg">Yêu cầu xem xe</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close Modal
closeModal.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});
