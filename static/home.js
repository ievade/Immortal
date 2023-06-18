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

