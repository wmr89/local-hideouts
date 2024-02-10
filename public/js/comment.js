const newFormHandler = async (event) => {
    event.preventDefault();
    const url=window.location.pathname
    const id = url.split('/')[2];
    console.log(id)
    const body = document.querySelector('#comment-body').value.trim();
  
    if (body) {
      const response = await fetch(`/api/location/${id}/comment`, {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace(`/location/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }
  };

    
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);