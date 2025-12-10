// Navigation function
function navigate(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// Handle GoSend form submission
function handleGoSendSubmit(event) {
    event.preventDefault();
    
    const formData = {
        pickupLocation: document.getElementById('pickup-location').value,
        deliveryLocation: document.getElementById('delivery-location').value,
        itemDescription: document.getElementById('item-description').value,
        itemWeight: document.getElementById('item-weight').value,
        recipientName: document.getElementById('recipient-name').value,
        recipientPhone: document.getElementById('recipient-phone').value,
        notes: document.getElementById('notes').value
    };
    
    console.log('GoSend Form Data:', formData);
    alert('Pesanan GoSend telah berhasil dibuat!');
    
    // Reset form
    event.target.reset();
    
    // Navigate to tracking
    navigate('tracking-page');
}

// Handle GoRide form submission
function handleGoRideSubmit(event) {
    event.preventDefault();
    
    const formData = {
        pickupLocation: document.getElementById('pickup-location-ride').value,
        destinationLocation: document.getElementById('destination-location').value,
        rideType: document.querySelector('input[name="ride-type"]:checked').value,
        passengerName: document.getElementById('passenger-name').value,
        passengerPhone: document.getElementById('passenger-phone').value,
        specialRequests: document.getElementById('special-requests').value
    };
    
    console.log('GoRide Form Data:', formData);
    alert('Pesanan GoRide telah berhasil dibuat!');
    
    // Reset form
    event.target.reset();
    
    // Navigate to tracking
    navigate('tracking-page');
}

// Copy promo code to clipboard
function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert(`Kode '${code}' telah disalin!`);
    }).catch(() => {
        alert(`Gagal menyalin kode '${code}'`);
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    // Show splash screen first
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.classList.add('active');
    
    // After 3 seconds, transition to home page
    setTimeout(() => {
        navigate('home-page');
    }, 3000);
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
