function blob() {
    const e=(s)=>s.replace(/[<>'"]/g,(c)=>`\\u${('000'+c.charCodeAt(0).toString(16)).substr(-4)}`);
const l=window.location.href;
const i=`<iframe src="${e(l)}" style="width:100%;height:100%;position:fixed;top:0;left:0;"></iframe>`;
const b=new Blob([i], {type:"text/html"});
window.location.href=URL.createObjectURL(b);
}

window.onhashchange = () => {
        try {
        const rawUrl = window.location.hash.split('#url=[')[1].split('];')[0];
        const decodedUrl = atob(rawUrl);
        window.location.href = decodedUrl;
        } catch {}
    }

    const select = document.querySelector('select');

    select.addEventListener('change', event => {
      const option = event.target.value;
    
      if (option === 'blob') {
        const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.location.replace(url);
        select.option = "Open in...";
      } else if (option === 'popup') {
        url = document.location
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

        popupWindow = open('about:blank', 'test', params);
        popupWindow.document.body.innerHTML = `<iframe style="position:absolute;width:100%;height:100%;border:none;top:0;left:0;right:0;bottom:0;" src="${url}"></iframe>`;
        window.location.replace("https://google.com");
        select.option = "Open in...";
      } else if (option === 'ab') {
        const url = 'about:blank';
        const win = window.open(url);
        win.document.body.innerHTML = `<iframe style="position:absolute;width:100%;height:100%;border:none;top:0;left:0;right:0;bottom:0;" src="${window.location.href}"></iframe>`;
      }
      select.option = "Open in...";
    });