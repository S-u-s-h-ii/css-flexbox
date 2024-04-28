# css-flexbox
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="flex-direction-buttons button-container">
    Flex-direction:
    <button data-value="row">row</button> 
    <button data-value="column">column</button>
  </div> 
  <div class="flex-wrap-buttons button-container">
    Flex-wrap:
    <button data-value="nowrap">nowrap</button> 
    <button data-value="wrap">wrap</button>
    <button data-value="wrap-reverse">wrap-reverse</button>
  </div> 
  <div class="justify-content-buttons button-container">
    Justify-content:
    <button data-value="flex-start">flex-start</button>
    <button data-value="flex-end">flex-end</button> 
    <button data-value="center">center</button> 
    <button data-value="space-around">space-around</button> 
    <button data-value="space-between">space-between</button> 
    <button data-value="space-evenly">space-evenly</button> 
  </div>
  <div class="align-items-buttons button-container">
    Align-items:
    <button data-value="stretch">stretch</button> 
    <button data-value="flex-start">flex-start</button>
    <button data-value="flex-end">flex-end</button> 
    <button data-value="center">center</button> 
    <button data-value="baseline">baseline</button> 
  </div>
  <div class="align-content-buttons button-container">
    Align-content:
    <button data-value="stretch">stretch</button> 
    <button data-value="flex-start">flex-start</button>
    <button data-value="flex-end">flex-end</button> 
    <button data-value="center">center</button> 
    <button data-value="space-around">space-around</button> 
    <button data-value="space-between">space-between</button> 
    <button data-value="space-evenly">space-evenly</button> 
  </div>
  <h2 class="container-title">flex-flow: row wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;</h2>
  <div class="container">
    <div class="blogpost">Post 1</div>
    <div class="blogpost large-font">Post 2</div>    
    <div class="blogpost">Post 3</div>
    <div class="blogpost">Post 4</div>
    <div class="blogpost large-font">Post 5</div>    
    <div class="blogpost">Post 6</div>
  </div>
  <script src = "index.js"></script>
</body>
  <style>
    * {
  margin: 0; 
  padding: 0; 
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 300px;
  background-color: darkred;
}

.blogpost {
  border: 1px solid black;
  background-color: lightgrey;
  min-width: 180px;
}

.blogpost.large-font {
  font-size: 22px;
}

button {
  padding: 10px;
  margin: 0 5px;
  border: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.button-container {
  margin: 25px;
}

h2 {
  margin: 25px;
}
  </style>
<script>
  document.addEventListener("DOMContentLoaded", function () {
  const $container = document.querySelector('.container'); 
  const $title = document.querySelector('.container-title');
  const values = {
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }

    const refreshTitle = () => {
    $title.innerText = `
      flex-flow: ${values.flexDirection} ${values.flexWrap}; 
      justify-content: ${values.justifyContent};
      align-items: ${values.alignItems};
      align-content: ${values.alignContent};`;
  }

    const listeners = [
    ['flex-direction', 'flexDirection'],
    ['align-items', 'alignItems'],
    ['align-content', 'alignContent'],
    ['justify-content', 'justifyContent'],
    ['flex-wrap', 'flexWrap']
  ];

  const getEventListener = (eventType) => {
    return (e) => { 
      values[eventType] = e.target.dataset.value;
      $container.style[eventType] = values[eventType];
      refreshTitle();
    }
  }

  for ( let [dashed, camelCase] of listeners ) {
    const buttons = document.querySelectorAll(`.${dashed}-buttons button`);
    for (let b of buttons) {
      b.addEventListener('click', getEventListener(camelCase));
    }
  }


});
</script>
</html>
