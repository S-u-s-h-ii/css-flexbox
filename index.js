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