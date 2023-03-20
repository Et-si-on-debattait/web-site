Papa.parse('csv/icons.csv', {
  download: true,
  header: true,
  complete: function(results) {
    const icons = results.data;
    const iconGrid = document.getElementById('icon-grid');
    icons.forEach(icon => {
      const iconElement = document.createElement('div');
      iconElement.className = 'icon';
      const imgElement = document.createElement('img');
      imgElement.src = icon.image_url;
      imgElement.alt = icon.name;
      iconElement.appendChild(imgElement);
      const captionElement = document.createElement('span');
      captionElement.className = 'caption';
      captionElement.textContent = icon.name;
      iconElement.appendChild(captionElement);
      iconGrid.appendChild(iconElement);
    });
  }
});
