// Function to fetch and update prices
async function fetchPrices() {
    try {
        // URL вашего API
        const apiUrl = 'http://92.118.8.202:8888/api/data';

        // Прокси URL для обхода CORS
        const proxiedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

        // Выполняем запрос к прокси
        const response = await fetch(proxiedUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Получаем данные из прокси
        const data = await response.json();
        
        // Разбираем данные из содержимого ответа
        const jsonData = JSON.parse(data.contents);

        // Обновляем содержимое страницы
        document.getElementById('shardify-ton').textContent = jsonData.price_8num_ton + ' TON';
        document.getElementById('shardify-usd').textContent = jsonData.price_8num_USDT + ' USD';
        document.getElementById('getgems-ton').textContent = jsonData.price_getgems_ton + ' TON';
        document.getElementById('getgems-usd').textContent = jsonData.price_getgems_USDT + ' USD';
        document.querySelectorAll('.link_wrapper a')[1].setAttribute('href', jsonData.link_getgems);
        document.getElementById('fragment-ton').textContent = jsonData.price_fragment_ton + ' TON';
        document.getElementById('fragment-usd').textContent = jsonData.price_fragment_USDT + ' USD';
        document.querySelectorAll('.link_wrapper a')[2].setAttribute('href', jsonData.link_fragment);
        
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
