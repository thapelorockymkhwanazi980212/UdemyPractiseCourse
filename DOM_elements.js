
function changeImage()
{
    const firstImage = document.getElementById('image');
    firstImage.src = "images/lock-image.png";
    firstImage.alt = 'Lock image';
}


function removeImage()
{
    document.getElementById('image').remove();
}
