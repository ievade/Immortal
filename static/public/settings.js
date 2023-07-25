function resetSettings() {
    const confirmReset = window.confirm("Are you sure you want to reset your settings?");
    
    if (confirmReset) {
      localStorage.removeItem('imm_settings');
      alert("Successfully reset settings!")
      window.location.reload();
     
    } else {alert("Cancelled.")}
    
  };
function saveSettings() {
    const settings = {
        etc: document.querySelector('#etc').checked,
        tcu: document.querySelector('#tcu').checked,
        sep: document.querySelector('#sep').value,
        seburl: document.querySelector('#seburl').value,
        tcn: document.querySelector('#tcn').value,
        tcurl: document.querySelector('#tcurl').value,
        ebp: document.querySelector('#ebp').value,
        eurl: document.querySelector('#eurl').value,
        cjs: jseditor.getValue(),
        ccss: csseditor.getValue(),
        hk: document.querySelector('#hk').value
      };
      
      localStorage.setItem('imm_settings', JSON.stringify(settings));
    alert("Successfully saved settings!")
}

const settings = JSON.parse(localStorage.getItem('imm_settings'));

if (settings) {
  for (const key in settings) {
    const value = settings[key];
    const input = document.querySelector(`#${key}`);
    
    if (input) {
      if (input.type === 'checkbox') {
        input.checked = value;
      } else {
        input.value = value;
      }
    } 
  }
}