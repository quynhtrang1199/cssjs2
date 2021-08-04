function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='https://kenhtinbatdongsan.com.vn/batdongsan/sun-tropical-village-phu-quoc-biet-thu-nhiet-doi-bai-kem/'>https://kenhtinbatdongsan.com.vn/batdongsan/sun-tropical-village-phu-quoc-biet-thu-nhiet-doi-bai-kem/"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
