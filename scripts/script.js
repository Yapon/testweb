// Функция для получения данных из API через AllOrigins
async function fetchPrices() {
    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('http://92.118.8.202:8888/api/data')); // Замените URL на ваш серверный URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);

        document.getElementById('shardify-ton').textContent = parsedData.price_8num_ton + ' TON';
        document.getElementById('shardify-usd').textContent = parsedData.price_8num_USDT + ' USD';
        document.getElementById('getgems-ton').textContent = parsedData.price_getgems_ton + ' TON';
        document.getElementById('getgems-usd').textContent = parsedData.price_getgems_USDT + ' USD';
        document.querySelectorAll('.link_wrapper a')[1].setAttribute('href', parsedData.link_getgems);
        document.getElementById('fragment-ton').textContent = parsedData.price_fragment_ton + ' TON';
        document.getElementById('fragment-usd').textContent = parsedData.price_fragment_USDT + ' USD';
        document.querySelectorAll('.link_wrapper a')[2].setAttribute('href', parsedData.link_fragment);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Initial fetch and set interval for updates
window.onload = () => {
    fetchPrices();
    setInterval(fetchPrices, 10000);
};

// Script for modal window
document.addEventListener('DOMContentLoaded', function () {
    const questionIcon = document.getElementById('questionIcon');
    const helpModal = document.getElementById('helpModal');
    const closeButton = document.getElementById('closeButton');

    questionIcon.addEventListener('click', function () {
        helpModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        helpModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == helpModal) {
            helpModal.style.display = 'none';
        }
    });
});
