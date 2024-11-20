var storeify_requestaquote = "eyJpZCI6NjM2LCJzaG9waWZ5X2RvbWFpbiI6ImFiaWRlaGF3YWlpLWNvbS5teXNob3BpZnkuY29tIiwic3RhdHVzIjoxLCJidXR0b25fbGFiZWwiOiJDYWxsIGZvciBQcmljZSIsImVsZV9yZW1vdmUiOiIiLCJlbGVfaXRlbV9saXN0IjoiLnRlbXBsYXRlLWNvbGxlY3Rpb24sLmdyaWRfX2l0ZW0uZ3JpZF9faXRlbS0tY29sbGVjdGlvbi10ZW1wbGF0ZSwucHJvZHVjdC1yZWNvbW1lbmRhdGlvbnNfX2lubmVyIC5ncmlkX19pdGVtLCAjQ29sbGVjdGlvblNlY3Rpb24gLmdyaWQtdW5pZm9ybSAuZ3JpZC1pdGVtLCAjc2hvcGlmeS1zZWN0aW9uLWNvbGxlY3Rpb24tdGVtcGxhdGUgLnByb2R1Y3QtaXRlbSwgI3Nob3BpZnktc2VjdGlvbi1jb2xsZWN0aW9uLXRlbXBsYXRlIC5ncmlkX19pdGVtLCAuY29sbGVjdGlvbnNfX3Byb2R1Y3RzIC5mZWF0dXJlZC1jb2xsZWN0aW9uc19faXRlbSwgI3Byb2R1Y3QtZ3JpZCAuZ3JpZF9faXRlbSwgLnRlbXBsYXRlLWNvbGxlY3Rpb24gLmdyaWQtLXVuaWZvcm0gLmdyaWRfX2l0ZW0sLmNvbGxlY3Rpb24tZ3JpZC1zZWN0aW9uLC5jb2xsZWN0aW9uIiwiZWxlX2ZybV9kZXRhaWwiOiIudGVtcGxhdGUtcHJvZHVjdCwucHJvZHVjdC10ZW1wbGF0ZV9fY29udGFpbmVyIFx1MDBhMC5ncmlkX19pdGVtLCAucHJvZHVjdF9faW5mby13cmFwcGVyLmdyaWRfX2l0ZW0sICNzaG9waWZ5LXNlY3Rpb24tcHJvZHVjdCAucHJvZHVjdF9fY29udGVudCwgI1Byb2R1Y3RTZWN0aW9uIC5ncmlkLCAjUHJvZHVjdFNlY3Rpb24tLXByb2R1Y3QtdGVtcGxhdGUgLmdyaWQsICNzaG9waWZ5LXNlY3Rpb24tcHJvZHVjdC10ZW1wbGF0ZSAucHJvZHVjdF9fZGV0YWlscywgI3Nob3BpZnktc2VjdGlvbi1wcm9kdWN0LXRlbXBsYXRlIC5ncmlkLC5wcm9kdWN0LXNlY3Rpb24sLnBhZ2UtcHJvZHVjdCIsIm1vZGUiOjEsImVsZV9wcmljZV9yZW1vdmUiOiIucHJvZHVjdF9fcHJpY2VzLC5wcmljZS1ib3gsI2NvbXBhcmVQcmljZS1wcm9kdWN0LXRlbXBsYXRlLCNQcm9kdWN0UHJpY2UtcHJvZHVjdC10ZW1wbGF0ZSwjUHJvZHVjdFByaWNlLC5wcm9kdWN0LXByaWNlLC5wcm9kdWN0X19wcmljZSwjcHJvZHVjdFByaWNlLXByb2R1Y3QtdGVtcGxhdGUsLnByb2R1Y3RfX2N1cnJlbnQtcHJpY2UsLnByb2R1Y3QtdGh1bWItY2FwdGlvbi1wcmljZS1jdXJyZW50LC5wcm9kdWN0LWl0ZW0tY2FwdGlvbi1wcmljZS1jdXJyZW50LC5ncmlkLXByb2R1Y3RfX3ByaWNlLHNwYW4ucHJpY2Usc3Bhbi5wcm9kdWN0LXByaWNlLC5wcm9kdWN0aXRlbS0tcHJpY2UsLnByb2R1Y3QtcHJpY2luZyxzcGFuLm1vbmV5LC5wcm9kdWN0LWl0ZW1fX3ByaWNlLC5wcm9kdWN0LWxpc3QtaXRlbS1wcmljZSxwLnByaWNlLGRpdi5wcmljZSwucHJvZHVjdC1tZXRhX19wcmljZXMsZGl2LnByb2R1Y3QtcHJpY2Usc3BhbiNwcmljZSwucHJpY2UubW9uZXksaDMucHJpY2UsYS5wcmljZSwucHJpY2UtYXJlYSwucHJvZHVjdC1pdGVtLXByaWNlLC5wcmljZWFyZWEsLmNvbGxlY3Rpb25HcmlkIC5jb2xsZWN0aW9uQmxvY2staW5mbyA+IHAsI0NvbXBhcmVQcmljZSwucHJvZHVjdC0tcHJpY2Utd3JhcHBlciwucHJvZHVjdC1wYWdlLS1wcmljZS13cmFwcGVyLC5jb2xvci0tc2hvcC1hY2NlbnQuZm9udC1zaXplLS1zLnQtLW1ldGEuZi0tbWFpbiwuQ29tcGFyZVByaWNlLC5Qcm9kdWN0UHJpY2UsLnByb2RUaHVtYiAudGl0bGUgc3BhbjpsYXN0LWNoaWxkLC5wcmljZSwucHJvZHVjdC1zaW5nbGVfX3ByaWNlLXByb2R1Y3QtdGVtcGxhdGUsLnByb2R1Y3QtaW5mby1wcmljZSwucHJpY2UtbW9uZXksLnByb2QtcHJpY2UsI3ByaWNlLWZpZWxkLC5wcm9kdWN0LWdyaWQtLXByaWNlLC5wcmljZXMsLnByaWNpbmcsI3Byb2R1Y3QtcHJpY2UsLm1vbmV5LXN0eWxpbmcsLmNvbXBhcmUtYXQtcHJpY2UsLnByb2R1Y3QtaXRlbS0tcHJpY2UsLmNhcmRfX3ByaWNlLC5wcm9kdWN0LWNhcmRfX3ByaWNlLC5wcm9kdWN0LXByaWNlX19wcmljZSwucHJvZHVjdC1pdGVtX19wcmljZS13cmFwcGVyLC5wcm9kdWN0LXNpbmdsZV9fcHJpY2UsLmdyaWQtcHJvZHVjdF9fcHJpY2Utd3JhcCxhLmdyaWQtbGluayxwLmdyaWQtbGlua19fbWV0YSIsImVsZV9idG5fcmVtb3ZlIjoiLnNob3BpZnktcGF5bWVudC1idXR0b24sI0FkZFRvQ2FydC1wcm9kdWN0LXRlbXBsYXRlLCNBZGRUb0NhcnQsI2FkZFRvQ2FydC1wcm9kdWN0LXRlbXBsYXRlLC5wcm9kdWN0X19hZGQtdG8tY2FydC1idXR0b24sLnByb2R1Y3QtZm9ybV9fY2FydC1zdWJtaXQsLmFkZC10by1jYXJ0LC5jYXJ0LWZ1bmN0aW9ucyA+IGJ1dHRvbiwucHJvZHVjdGl0ZW0tLWFjdGlvbi1hdGMsLnByb2R1Y3QtZm9ybS0tYXRjLWJ1dHRvbiwucHJvZHVjdC1tZW51LWJ1dHRvbi1hdGMsLnByb2R1Y3RfX2FkZC10by1jYXJ0LC5wcm9kdWN0LWFkZCwuYWRkLXRvLWNhcnQtYnV0dG9uLCNhZGRUb0NhcnQsLnByb2R1Y3QtZGV0YWlsX19mb3JtX19hY3Rpb24gPiBidXR0b24sLnByb2R1Y3QtZm9ybS1zdWJtaXQtd3JhcCA+IGlucHV0LC5wcm9kdWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxpbnB1dC5zdWJtaXQsLmFkZF90b19jYXJ0LC5wcm9kdWN0LWl0ZW0tcXVpY2stc2hvcCwjYWRkLXRvLWNhcnQsLnByb2R1Y3RGb3JtLXN1Ym1pdCwuYWRkLXRvLWNhcnQtYnRuLC5wcm9kdWN0LXNpbmdsZV9fYWRkLWJ0biwucXVpY2stYWRkLS1hZGQtYnV0dG9uLC5wcm9kdWN0LXBhZ2UtLWFkZC10by1jYXJ0LC5hZGRUb0NhcnQsLnByb2R1Y3QtZm9ybSAuZm9ybS1hY3Rpb25zLC5idXR0b24uYWRkLC5idG4tY2FydCxidXR0b24jYWRkLC5hZGR0b2NhcnQsLkFkZHRvQ2FydCwucHJvZHVjdC1hZGQgaW5wdXQuYWRkLGJ1dHRvbiNwdXJjaGFzZSxmb3JtW2FjdGlvbj1cIlwvY2FydFwvYWRkXCJdIGlucHV0W3R5cGU9XCJidXR0b25cIl0sZm9ybVthY3Rpb249XCJcL2NhcnRcL2FkZFwiXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLGZvcm1bYWN0aW9uPVwiXC9jYXJ0XC9hZGRcIl0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sLnByb2R1Y3RfX2Zvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sI0FkZFRvQ2FydC0tcHJvZHVjdC10ZW1wbGF0ZSwucHJvZHVjdC1mb3JtX19hZGQtdG8tY2FydCxmb3JtW2FjdGlvbj1cIlwvY2FydFwvYWRkKlwiXSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLGZvcm1bYWN0aW9uPVwiXC9jYXJ0XC9hZGQqXCJdIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sZm9ybVthY3Rpb24qPVwiXC9jYXJ0XC9hZGQqXCJdIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdLC5wcm9kdWN0X19mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIiwiZWxlX3F0eV9yZW1vdmUiOiIucHJvZHVjdC1mb3JtX19pdGVtLS1xdWFudGl0eSwucHJvZHVjdC1zaW5nbGVfX3F1YW50aXR5LC5qcy1xdHksLnF1YW50aXR5LXdyYXBwZXIsLnF1YW50aXR5LXNlbGVjdG9yLC5wcm9kdWN0LWZvcm1fX3F1YW50aXR5LXNlbGVjdG9yLC5wcm9kdWN0LXNpbmdsZV9fYWRkdG9jYXJ0IGxhYmVsIiwibGFuZyI6eyJidG5fYWRkcXVvdGUiOiJBZGQgdG8gUXVvdGUiLCJjYWxsX2Zvcl9wcmljZSI6IlJlcXVlc3QgYSBxdW90ZSIsImJ0bl92aWV3IjoiVmlldyBRdW90ZSIsImJ0bl9jb250aW51ZSI6IkNvbnRpbnVlIFNob3AiLCJhZGRfdGl0bGUiOiJBZGQgXCJ7e3Byb2R1Y3R9fVwiIHRvIHF1b3RlIiwidGJsX25hbWUiOiJOYW1lIiwidGJsX3NrdSI6IlNrdSIsInRibF9vcHRpb24iOiJPcHRpb24iLCJ0YmxfcXR5IjoiUVRZIiwicXVvdGVfZW1wdHkiOiJZb3VyIHF1b3RlIGlzIGN1cnJlbnRseSBlbXB0eS4iLCJ5b3VyX3ByaWNlIjoiWW91ciBQcmljZSIsIm9sZF9wcmljZSI6IlByaWNlIiwicHJpbnQiOiJQcmludCBQREYiLCJ0b3RhbCI6IlRvdGFsIn0sImpxdWVyeV9pbmNsdWRlZCI6IntcImpxdWVyeVwiOlwiMVwiLFwiYm9vdHN0cmFwXCI6XCIxXCIsXCJtb21lbnRqc1wiOlwiMVwiLFwiZGF0ZXRpbWVcIjpcIjFcIixcImZpbGVpbnB1dFwiOlwiMVwiLFwianF1ZXJ5X3ZhbGlkYXRlXCI6XCIxXCJ9IiwicmVtb3ZlX3ByaWNlIjoxLCJyZW1vdmVfYnV0dG9uIjoxLCJlbmFibGVfY2FwdGNoYSI6MCwiZ2dfc2l0ZV9rZXkiOiIiLCJnZ19zZWNyZXRfa2V5IjoiIiwiY3JlYXRlZF9hdCI6IjIwMjItMDItMTAgMTc6NTE6MTYiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wMi0xNyAxODozNTo0NCIsIm1haWxjaGltcF9rZXlhcGkiOm51bGwsIm1haWxjaGltcF9saXN0aWQiOm51bGwsImtsYXZpeW9fa2V5YXBpIjpudWxsLCJrbGF2aXlvX2xpc3RpZCI6bnVsbCwiY2FtcGFpZ25tb25pdG9yX2tleWFwaSI6bnVsbCwiY2FtcGFpZ25tb25pdG9yX2NsaWVudGlkIjpudWxsLCJjYW1wYWlnbm1vbml0b3JfbGlzdGlkIjpudWxsLCJnZXRyZXNwb25zZV9rZXlhcGkiOm51bGwsImdldHJlc3BvbnNlX2xpc3RpZCI6bnVsbCwib21uaXNlbmRfa2V5YXBpIjpudWxsLCJvbW5pc2VuZF90YWdzIjpudWxsLCJzaGVldF9pZCI6bnVsbCwiYWN0aXZlY2FtcGFpZ25fa2V5YXBpIjpudWxsLCJhY3RpdmVjYW1wYWlnbl91cmwiOm51bGwsImFjdGl2ZWNhbXBhaWduX2xpc3RpZCI6bnVsbCwiZW5hYmxlX3NtdHAiOjAsImRyaXZlciI6InNtdHAiLCJob3N0IjoiIiwidXNlcm5hbWUiOiIiLCJwYXNzd29yZCI6IiIsImVuY3J5cHRpb24iOiIiLCJwb3J0IjoiIiwibmFtZSI6IiIsInJlY2lwaWVudCI6IiIsInNob3J0X2NvZGUiOjAsImVuYWJsZV9lbWFpbF9zaG9waWZ5IjoxLCJlbmFibGVfZW1haWxfYXBwIjoxLCJmcm9tX25hbWUiOm51bGwsImZyb21fZW1haWwiOm51bGwsImVtYWlsX2NjIjoiIiwib3JkZXJfc3ViIjoiWW91ciBxdW90ZSBoYXMgYmVlbiBhY2NlcHRlZCEiLCJvcmRlcl9jb250ZW50IjoiPHA+RGVhciA8c3Ryb25nPntjdXN0b21lcl9uYW1lfTxcL3N0cm9uZz4sPFwvcD5cclxuXHJcbjxwPllvdXIgcXVvdGUgaGFzIGJlZW4mbmJzcDthY2NlcHRlZCBhbmQgY29udmVydGVkIHRvIG9yZGVyIDxzdHJvbmc+e29yZGVyX25hbWV9PFwvc3Ryb25nPi48XC9wPlxyXG5cclxuPHA+e21lc3NhZ2V9PFwvcD5cclxuXHJcbjxwPnt0YWJsZV9wcm9kdWN0fTxcL3A+XHJcblxyXG48cD5CZXN0IHJlZ2FyZHMsPGJyIFwvPlxyXG48c3Ryb25nPntzdG9yZV9uYW1lfTxcL3N0cm9uZz48XC9wPiIsImVkaXRfc3ViIjoiWW91ciBxdW90ZSBoYXMgYmVlbiB1cGRhdGVkISIsImVkaXRfY29udGVudCI6IjxwPkRlYXIgPHN0cm9uZz57Y3VzdG9tZXJfbmFtZX08XC9zdHJvbmc+LDxcL3A+XHJcblxyXG48cD5Zb3VyIHF1b3RlIGhhcyBiZWVuIHVwZGF0ZWQuPFwvcD5cclxuXHJcbjxwPnttZXNzYWdlfTxcL3A+XHJcblxyXG48cD57dGFibGVfcHJvZHVjdH08XC9wPlxyXG5cclxuPHA+QmVzdCByZWdhcmRzLDxiciBcLz5cclxuPHN0cm9uZz57c3RvcmVfbmFtZX08XC9zdHJvbmc+PFwvcD4iLCJyZWplY3Rfc3ViIjoiWW91ciBxdW90ZSBoYXMgYmVlbiByZWplY3RlZCEiLCJyZWplY3RfY29udGVudCI6IjxwPkRlYXIgPHN0cm9uZz57Y3VzdG9tZXJfbmFtZX08XC9zdHJvbmc+LDxcL3A+XHJcblxyXG48cD5Zb3VyIHF1b3RlIGhhcyBiZWVuIHJlamVjdGVkLjxcL3A+XHJcblxyXG48cD57bWVzc2FnZX08XC9wPlxyXG5cclxuPHA+e3RhYmxlX3Byb2R1Y3R9PFwvcD5cclxuXHJcbjxwPkJlc3QgcmVnYXJkcyw8YnIgXC8+XHJcbjxzdHJvbmc+e3N0b3JlX25hbWV9PFwvc3Ryb25nPjxcL3A+IiwibWV0YV9pZCI6IjIyMzY5NTg4OTY5NzA3IiwiaGlkZV9idG5fcXVvdGUiOjEsImF1dG9fZW5hYmxlIjowLCJkaXNjb3VudCI6MTAsImhpZGVfb25fcHJvZHVjdCI6MCwiY3NzIjoiIiwiZW5hYmxlX3dpZGdldCI6MSwid2lkZ2V0X2ljb24iOiJmYXMgZmEtc2hvcHBpbmctY2FydCIsIndpZGdldF90ZXh0IjoiUXVvdGUiLCJ3aWRnZXRfcG9zaXRpb24iOjEsIndpZGdldF9jb2xvciI6IntcInRleHRcIjpcIkZGRkZGRlwiLFwiYmdcIjpcIjAwMDAwMFwifSIsImVuYWJsZV9wcmludCI6MCwidGVtcGxhdGVfcHJpbnQiOiI8cD57dGFibGVfcHJvZHVjdH08XC9wPiIsInJlY29tbWVuZGF0aW9uX2VsZSI6Ii5wcm9kdWN0LXJlY29tbWVuZGF0aW9ucyAucHJpY2UiLCJyZW1vdmVfY29weXJpZ2h0IjowLCJoaWRlX3ZhciI6MCwidHJhY2tpbmdfY29kZSI6bnVsbCwiaHRtbF9tb2RlIjo2NTl9";!(function() {
    var B64={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",lookup:null,ie:/MSIE /.test(navigator.userAgent),ieo:/MSIE [67]/.test(navigator.userAgent),encode:function(a){var e,f,g,b=B64.toUtf8(a),c=-1,d=b.length,h=[,,];if(B64.ie){for(var i=[];++c<d;)e=b[c],f=b[++c],h[0]=e>>2,h[1]=(3&e)<<4|f>>4,isNaN(f)?h[2]=h[3]=64:(g=b[++c],h[2]=(15&f)<<2|g>>6,h[3]=isNaN(g)?64:63&g),i.push(B64.alphabet.charAt(h[0]),B64.alphabet.charAt(h[1]),B64.alphabet.charAt(h[2]),B64.alphabet.charAt(h[3]));return i.join("")}for(var i="";++c<d;)e=b[c],f=b[++c],h[0]=e>>2,h[1]=(3&e)<<4|f>>4,isNaN(f)?h[2]=h[3]=64:(g=b[++c],h[2]=(15&f)<<2|g>>6,h[3]=isNaN(g)?64:63&g),i+=B64.alphabet[h[0]]+B64.alphabet[h[1]]+B64.alphabet[h[2]]+B64.alphabet[h[3]];return i},decode:function(a){if(a.length%4)throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");var b=B64.fromUtf8(a),c=0,d=b.length;if(B64.ieo){for(var e=[];d>c;)b[c]<128?e.push(String.fromCharCode(b[c++])):b[c]>191&&b[c]<224?e.push(String.fromCharCode((31&b[c++])<<6|63&b[c++])):e.push(String.fromCharCode((15&b[c++])<<12|(63&b[c++])<<6|63&b[c++]));return e.join("")}for(var e="";d>c;)e+=b[c]<128?String.fromCharCode(b[c++]):b[c]>191&&b[c]<224?String.fromCharCode((31&b[c++])<<6|63&b[c++]):String.fromCharCode((15&b[c++])<<12|(63&b[c++])<<6|63&b[c++]);return e},toUtf8:function(a){var d,b=-1,c=a.length,e=[];if(/^[\x00-\x7f]*$/.test(a))for(;++b<c;)e.push(a.charCodeAt(b));else for(;++b<c;)d=a.charCodeAt(b),128>d?e.push(d):2048>d?e.push(192|d>>6,128|63&d):e.push(224|d>>12,128|63&d>>6,128|63&d);return e},fromUtf8:function(a){var c,b=-1,d=[],e=[,,];if(!B64.lookup){for(c=B64.alphabet.length,B64.lookup={};++b<c;)B64.lookup[B64.alphabet.charAt(b)]=b;b=-1}for(c=a.length;++b<c&&(e[0]=B64.lookup[a.charAt(b)],e[1]=B64.lookup[a.charAt(++b)],d.push(e[0]<<2|e[1]>>4),e[2]=B64.lookup[a.charAt(++b)],64!=e[2])&&(d.push((15&e[1])<<4|e[2]>>2),e[3]=B64.lookup[a.charAt(++b)],64!=e[3]);)d.push((3&e[2])<<6|e[3]);return d}};
    //Add_storeify_data
    var config_reponse = JSON.parse(B64.decode(storeify_requestaquote));

    if (config_reponse.status == '0') return;
    var loadScript = function(url, callback) {

        var script = document.createElement("script");

        script.type = "text/javascript";

        // If the browser is Internet Explorer.

        if (script.readyState) {

            script.onreadystatechange = function() {

                if (script.readyState == "loaded" || script.readyState == "complete") {

                    script.onreadystatechange = null;

                    callback();

                }

            };

            // For any other browser.

        } else {

            script.onload = function() {

                callback();

            };

        }

        script.src = url;

        document.getElementsByTagName("head")[0].appendChild(script);

    };

    var storeifyJavaScript = function(jQuery) {
        var meta = '';
        if (window.meta) {
            meta = window.meta.page;
        }

        var domainname = '';
        if (typeof Shopify !== 'undefined') {
            domainname = Shopify.shop;
        }

        var max_file = 5;
        var file_size = 5120;
        var html_before = '';
        var html_after = '';
        var array_remove_price = config_reponse.ele_price_remove; //[ '.price','.product-item__price-wrapper','.grid-product__price-wrap','.grid-link__meta','.card__price','.price__sale','.product-item--price','.price--on-sale','.product-card__price','.product-single__meta-list','.product__price'];
        var array_remove_btn = config_reponse.ele_btn_remove;
        var ele_frm_detail = config_reponse.ele_frm_detail;
        var remove_ele_custom = config_reponse.ele_remove;
        var array_ele_qty_remove = config_reponse.ele_qty_remove;
        var ele_itemList = config_reponse.ele_item_list; //'.grid__item';
        var storeify_days = 1;
        var storeify_lang = config_reponse.lang;
        var storeify_custommerId = 'storeify_custommer';
        if (meta.customerId) {
            storeify_custommerId = meta.customerId;
        }
        var appConfig = window.storeifyRequestaquote || {};
        var requestaquote_json = appConfig.storeify_requestaquote_json;
        var variant_element = '';
        var qty_element = '';
        var ify_short_code = config_reponse.short_code;
        var ify_show_input_price = appConfig.show_input_price;
        if(typeof appConfig.lang !== 'undefined'){
            storeify_lang = appConfig.lang;
        }
        var root_url = '/';
        if(appConfig.root_url && appConfig.root_url != '/')  root_url = appConfig.root_url+'/';
        // .storeify-hiden-price

        jQuery('body').addClass('storeify-hiden-price');
        setTimeout(function() { 
            jQuery('#ify-style-remove').remove();
        }, 500);
        function Storeify_setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
        }

        function Storeify_getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1)
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length)
                }
            }
            return "";
        }
        var formatMoney = function(cents, format) {
            if (typeof cents == 'string') {
                cents = cents.replace('.', '');
            }
            var value = '';
            var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
            var formatString = (format || this.money_format);

            function defaultOption(opt, def) {
                // console.log('opt'+opt+'--'+'def'+def);
                return (typeof opt == 'undefined' ? def : opt);
            }

            function formatWithDelimiters(number, precision, thousands, decimal) {
                precision = defaultOption(precision, 2);
                thousands = defaultOption(thousands, ',');
                decimal = defaultOption(decimal, '.');

                if (isNaN(number) || number == null) {
                    return 0;
                }

                number = (number / 100.0).toFixed(precision);
                // console.log('number--'+number);
                var parts = number.split('.'),
                    dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
                    cents = parts[1] ? (decimal + parts[1]) : '';

                return dollars + cents;
            }

            switch (formatString.match(placeholderRegex)[1]) {
                case 'amount':
                    value = formatWithDelimiters(cents, 2);
                    break;
                case 'amount_no_decimals':
                    value = formatWithDelimiters(cents, 0);
                    break;
                case 'amount_with_comma_separator':
                    value = formatWithDelimiters(cents, 2, '.', ',');
                    break;
                case 'amount_no_decimals_with_comma_separator':
                    value = formatWithDelimiters(cents, 0, '.', ',');
                    break;
            }

            return formatString.replace(placeholderRegex, value);
        }; //end money
        function Storeify_removeCookie(cname, ) {
            document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        }

        function jviewFormbuilder(id, html, upload, max, storeify_filezie) {
            jQuery(document).ready(function() {
                jQuery('body').append(html);
                jQuery('.storeify_money_format').val(appConfig.money_format);
                if (typeof appConfig.customer !== 'undefined'){
                    var customerInfo = appConfig.customer;
                    jQuery('.storeify-requestaquote input[name="storeifyInput_first_name"]').val(customerInfo.first_name );
                    jQuery('.storeify-requestaquote input[name="storeifyInput_last_name"]').val(customerInfo.last_name  );
                    jQuery('.storeify-requestaquote input[name="storeifyInput_email"]').val(customerInfo.email );
                    jQuery('.storeify-requestaquote input[name="customer"]').val(customerInfo.id)
                }
                if (upload.upload == 1)
                    uploadFile(id, upload.upload_label, upload.upload_url, max, storeify_filezie);
            });
        }

        function uploadFile(id, label, url, max, storeify_filezie) {
            var $storeify_files = jQuery("#storeify_form_attach_file_" + id);
            var storeify_time = new Date().getTime();
            $storeify_files.fileinput({
                allowedFileExtensions: ['jpg', 'gif', 'png', 'jpeg', 'tiff', 'txt', 'mp3', 'mp4', 'zip', 'doc', 'docx', 'csv', 'xls', 'xlsx', 'ppt', 'pdf', 'psd', 'svg', 'esp', 'ai'],
                uploadUrl: url,
                uploadAsync: true,
                showPreview: false,
                showCaption: false,
                showCancel: false,
                showRemove: false,
                showUpload: false, // hide upload button
                showRemove: false, // hide remove button
                browseIcon: '<i class="fa fa-paperclip"> </i>',
                browseLabel: label,
                browseClass: 'btn-ctf-attach',
                removeLabel: '',
                removeClass: 'btn btn-ctf-remove-attach form-control',
                uploadLabel: '',
                uploadClass: 'btn btn-ctf-upload-attach form-control',
                msgInvalidFileExtension: 'Only "{extensions}" files are supported.',
                overwriteInitial: false, // append files to initial preview
                minFileCount: 1,
                maxFileCount: max,
                maxFileSize: storeify_filezie, //5Mb(5120)
                theme: 'fa',
                initialPreviewAsData: true,
                elErrorContainer: '#form_attach_file_error_' + id,
                uploadExtraData: function() {
                    return {
                        _token: jQuery("#storeify_form_action_" + id + " input[name='_token']").val(),
                        id: id,
                        shopify_domain: appConfig.shop_domain,
                    };
                },
                slugCallback: function(filename) {
                    filename = filename.replace('(', '_').replace(']', '_').replace(')', '_').replace(' ', '_').split();
                    filename = storeify_time + '_' + filename;
                    jQuery('#storeify_attach_filename_temp_' + id).val(filename);
                    // jQuery('#storeify_form_attach_filename_'+id).val(filename);
                    return filename;
                }
            }).on("filebatchselected", function(event, files) {
                // $storeify_files.fileinput("upload");
                jQuery(event.target).fileinput("upload");
            }).on('filebatchpreupload', function(event, data, id, index) {

                var ele_id = data.extra.id;
                jQuery('#form_attach_file_success_' + ele_id).html('<ul></ul>').hide();

            }).on('fileuploaded', function(event, data, id, index) {
                var out = '';
                var ar_name = [];
                var ar_label = [];
                var ele_id = data.extra.id;
                var fname = data.files[index].name;
                filename = fname.replace('(', '_').replace(']', '_').replace(')', '_').replace(' ', '_').split();
                filename = storeify_time + '_' + filename;
                var string_name = jQuery('#storeify_form_attach_filename_' + ele_id).val() + ',' + filename;
                var string_label = jQuery('#form_attach_filelabel_' + ele_id).val() + ',' + fname;
                ar_name = string_name.split(",");
                ar_label = string_label.split(",");
                jQuery.each(ar_name, function(key, value) {
                    if (value) {
                        out += '<li class="storeify-contact-img" data-label="' + ar_label[key] + '" data-name="' + value + '"><i class="far fa-file-image"></i>' + ' Uploaded file ' + ar_label[key] + ' successfully.' + ' <i style="font-size:14px;color:red;cursor: pointer;" class="fa fa-times storeify-delete-file" aria-hidden="true" title="Remove"></i></li>';

                    }
                });
                //var out = out + '<li  class="storeify-contact-img" data-name="'+filename+'" ><i class="far fa-file-image"></i>' + ' Uploaded file ' + fname + ' successfully.' + ' <i style="font-size:14px;color:red;margin-left:7px;cursor: pointer;" class="fa fa-trash" aria-hidden="true"></i></li>';

                jQuery('#form_attach_file_success_' + ele_id + ' ul').html(out);
                jQuery('#form_attach_file_success_' + ele_id).fadeIn('slow');


                // jQuery('#storeify_form_attach_filename_'+ele_id).val(jQuery('#storeify_form_attach_filename_'+ele_id).val()+','+filename);
                jQuery('#storeify_form_attach_filename_' + ele_id).val(string_name);
                jQuery('#form_attach_filelabel_' + ele_id).val(string_label);

                jQuery('#storeify_form_action_' + ele_id + ' .kv-upload-progress').hide();
                jQuery('.storeify-contact-img .storeify-delete-file').on('click', function() {
                    var attach_submit = jQuery('#storeify_form_attach_filename_' + ele_id).val();
                    var label_file = jQuery('#form_attach_filelabel_' + ele_id).val();
                    jQuery('#storeify_form_attach_filename_' + ele_id).val(attach_submit.replace(',' + jQuery(this).parent().data('name'), ''));
                    jQuery('#form_attach_filelabel_' + ele_id).val(label_file.replace(',' + jQuery(this).parent().data('name'), ''));
                    jQuery(this).parent().remove();
                });
            });

        }

        function removeFromlistingpage(closest, parent, array) {
            closest.closest(parent.trim()).find(array.trim()).remove();
        }

        function removeFromdetailpage(array, parent) {
            jQuery(parent).find(array.trim()).remove();
        }


        function findProducts(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery("a[href*='/products']").each(function() {
                currHref = $(this);
                var getlistUrl = currHref.attr('href');

                getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                sort_url = getlistUrlSub.split("?")[0];
                if ($.inArray(sort_url, productobj) !== -1) {
                    var parentItem = currHref.closest(ele_itemList.trim());
                    if (!parentItem.hasClass('ify-has-modal'))
                        parentItem.addClass('ify-has-modal').append('<div class="storeify-request-bnt storeify-request-bnt-list"><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup storeify-button-list btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.btn_addquote + '</button></div><br>');
                    if (config_reponse.remove_price == 1)

                        removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                    if (config_reponse.remove_button == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_btn)
                }
            });
            if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                var sort_url = appConfig.product.handle;
                if ($.inArray(sort_url, productobj) !== -1) {
                    if (jQuery('.storeify-button-quote-liquid').length > 0) {
                        jQuery('.storeify-button-quote-liquid').removeClass('ify-hide').attr('data-id', id).attr('data-product', sort_url).attr('data-target', '#storeify-light-modal-' + id)
                    } else {
                        jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery('<div class="storeify-request-bnt storeify-request-bnt-detail" ><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup storeify-button-detail btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.btn_addquote + '</button></div><br>'));
                    }

                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
            }

        }

        function allProducts(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery("a[href*='/products']").each(function() {
                currHref = jQuery(this);
                var getlistUrl = currHref.attr('href');
                getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                var sort_url = getlistUrlSub.split("?")[0];
                // jQuery(this).parent().find('.price').after('<div class="storeify-request-bnt" style="text-align: center;"><button type="button"  id="storeify-trigger-popup-'+id+'"  class="storeify-quote-btn-trigger-popup btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-'+id+'" data-product="'+getlistUrl+'"  data-id="'+id+'" data-target="#storeify-light-modal-'+id+'">'+storeify_lang.btn_addquote+'</button></div><br>'); 
                var parentItem = currHref.closest(ele_itemList.trim());
                if (!parentItem.hasClass('ify-has-modal'))
                    parentItem.addClass('ify-has-modal').append('<div class="storeify-request-bnt storeify-request-list"><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup storeify-button-list btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.btn_addquote + '</button></div><br>');

                if (config_reponse.remove_price == 1)
                    removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                if (config_reponse.remove_button == 1)
                    removeFromlistingpage(currHref, ele_itemList, array_remove_btn)

            });
            if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                var sort_url = appConfig.product.handle;
                if (jQuery('.storeify-button-quote-liquid').length > 0) {
                    jQuery('.storeify-button-quote-liquid').removeClass('ify-hide').attr('data-id', id).attr('data-product', sort_url).attr('data-target', '#storeify-light-modal-' + id)
                } else {
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after('<div class="storeify-request-bnt storeify-request-bnt-detail" ><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup storeify-button-detail btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.btn_addquote + '</button></div><br>');
                }
                if (config_reponse.remove_price == 1)
                    removeFromdetailpage(array_remove_price, ele_frm_detail);
                if (config_reponse.remove_button == 1) {
                    removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                    removeFromdetailpage(array_remove_btn, ele_frm_detail);
                }
            }

        }

        function findProductscode(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery(".ify-button-code").each(function() {
                currHref = $(this);
                var sort_url = currHref.attr('data-product');
                if ($.inArray(sort_url, productobj) !== -1) {
                    if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                        currHref.removeClass('ify-hide').addClass('storeify-button-detail').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                        if (config_reponse.remove_price == 1)
                            removeFromdetailpage(array_remove_price, ele_frm_detail);
                        if (config_reponse.remove_button == 1) {
                            removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                            removeFromdetailpage(array_remove_btn, ele_frm_detail);
                        }
                    } else {
                        var parentItem = currHref.closest(ele_itemList.trim());
                        currHref.removeClass('ify-hide').addClass('storeify-button-grid').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                        if (config_reponse.remove_price == 1)
                            removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                        if (config_reponse.remove_button == 1)
                            removeFromlistingpage(currHref, ele_itemList, array_remove_btn);
                    }
                }
            });

        }

        function allProductscode(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery(".ify-button-code").each(function() {
                currHref = $(this);
                var sort_url = currHref.attr('data-product');
                // if($.inArray(sort_url, productobj) !== -1){
                if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                    currHref.removeClass('ify-hide').addClass('storeify-button-detail').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                } else {
                    var parentItem = currHref.closest(ele_itemList.trim());
                    currHref.removeClass('ify-hide').addClass('storeify-button-grid').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                    if (config_reponse.remove_price == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                    if (config_reponse.remove_button == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_btn);
                }
                // }
            });

        }
        function checkConditionsOr(condition_key,condition_name,condition_val,productData){
            var check  = 0 //mode = all;
            jQuery.each(condition_key, function( index, value ) {
                if(value == 'type' || value == 'vendor'){
                    if(condition_name[index] == 'equal'){
                        if(productData[value] == condition_val[index]) return check = 1;
                    }
                    if(condition_name[index] == 'not_equal'){
                        if(productData[value] != condition_val[index]) return check = 1;
                    }
                    if(condition_name[index] == 'contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) >= 0) return check = 1;
                    }
                    if(condition_name[index] == 'not_contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) == -1) return check = 1;
                    }
                    if(condition_name[index] == 'starts_with'){
                        if (productData[value].startsWith(condition_val[index])) return check = 1;
                    }
                    if(condition_name[index] == 'ends_with'){
                        if (productData[value].endsWith(condition_val[index])) return check = 1;
                    }
                }
                if(value == 'available'){
                    if(condition_val[index] == 'no'){
                        if(productData[value]) return check = 1;
                    }else{
                        if(!productData[value]) return check = 1;
                    }
                }
                if(value == 'tags'){
                    if(jQuery.inArray(condition_val[index], productData.tags) !== -1) return check = 1;
                }
            });
            return check;
        }
        function checkConditionsAnd(condition_key,condition_name,condition_val,productData){
            var check  = 1 //mode = all;
            jQuery.each(condition_key, function( index, value ) {
                if(value == 'type' || value == 'vendor'){
                    if(condition_name[index] == 'equal'){
                        if(productData[value] != condition_val[index]) return check = 0;
                    }
                    if(condition_name[index] == 'not_equal'){
                        if(productData[value] == condition_val[index]) return check = 0;
                    }
                    if(condition_name[index] == 'contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) == -1) return check = 0;
                    }
                    if(condition_name[index] == 'not_contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) >= 0) return check = 0;
                    }
                    if(condition_name[index] == 'starts_with'){
                        if (!productData[value].startsWith(condition_val[index])) return check = 0;
                    }
                    if(condition_name[index] == 'ends_with'){
                        if (!productData[value].endsWith(condition_val[index])) return check = 0;
                    }
                }
                if(value == 'available'){
                    if(condition_val[index] == 'no'){
                        if(!productData[value]) return check = 0;
                    }else{
                        if(productData[value]) return check = 0;
                    }
                    
                }
                if(value == 'tags'){
                    if(jQuery.inArray(condition_val[index], productData.tags) == -1) return check = 0;
                }
            });
            return check;
        }
        function checkConditions(conditionsRaw,productData){
            var mode = conditionsRaw.show_conditions;
            var condition_key = [];
            var condition_name = [];
            var condition_val = [];
            if(Array.isArray(conditionsRaw.condition_key)){
                condition_key = conditionsRaw.condition_key;
                condition_name = conditionsRaw.condition_name;
                condition_val = conditionsRaw.condition_val;
            }else{
                condition_key.push(conditionsRaw.condition_key);
                condition_name.push(conditionsRaw.condition_name);
                condition_val.push(conditionsRaw.condition_val);
            }
            if(mode == 1)
                return checkConditionsAnd(condition_key,condition_name,condition_val,productData);
            else
                return checkConditionsOr(condition_key,condition_name,condition_val,productData);
            return 0;

        }
        function addButtonList_4(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            jQuery(".ify-quote-group").each(function() {
                var that = jQuery(this);
                var prdId = jQuery(this).data('targetid');
                var productCurrent = '';
                if (typeof appConfig.product !== 'undefined')
                    productCurrent = appConfig.product.id;
                if (appConfig.productdata[prdId] && !that.hasClass('ify-has-modal')) {
                    if(checkConditions(objectView,appConfig.productdata[prdId]) == 1){
                        if (prdId.toString() != productCurrent) {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                            if (config_reponse.remove_price == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_price);
                            if (config_reponse.remove_button == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_btn);
                        } else {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                            if (config_reponse.remove_price == 1)
                                removeFromdetailpage(array_remove_price, ele_frm_detail);
                            if (config_reponse.remove_button == 1) {
                                removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                removeFromdetailpage(array_remove_btn, ele_frm_detail);
                            }
                        }
                    }
                }
            });
            if (jQuery(".ify-quote-group").length == 0 && typeof appConfig.product !== 'undefined') {
                var sort_url = appConfig.product.handle;
                
                if(checkConditions(objectView,appConfig.product) == 1){
                    var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '"><button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.btn_addquote + '</button></div>';
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
            }
        }
        function addButtonList_3(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            // currentClass = 'ify-in-grid';
            jQuery(".ify-quote-group").each(function() {
                var that = jQuery(this);
                var prdId = jQuery(this).data('targetid');
                var checkCollec = 0;
                var productCurrent = '';
                if (typeof appConfig.product !== 'undefined')
                    productCurrent = appConfig.product.id;
                if (appConfig.collections[prdId] && !that.hasClass('ify-has-modal')) {
                    jQuery.each(appConfig.collections[prdId], function(i, v) {
                        if (jQuery.inArray(v.toString(), objectView) != -1)
                            checkCollec = 1;
                    });
                    if (checkCollec == 1) {
                        if (prdId.toString() != productCurrent) {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                            if (config_reponse.remove_price == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_price);
                            if (config_reponse.remove_button == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_btn);
                        } else {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                            if (config_reponse.remove_price == 1)
                                removeFromdetailpage(array_remove_price, ele_frm_detail);
                            if (config_reponse.remove_button == 1) {
                                removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                removeFromdetailpage(array_remove_btn, ele_frm_detail);
                            }
                        }
                    } else {
                        jQuery(this).find('button').remove();
                    }
                }
            });
            if (jQuery(".ify-quote-group").length == 0 && typeof appConfig.product !== 'undefined') {
                var sort_url = appConfig.product.handle;
                var checkCollec = 0;
                jQuery.each(appConfig.product.collection, function(i, v) {
                    if (jQuery.inArray(v.toString(), objectView) != -1)
                        checkCollec = 1;
                });
                if (checkCollec == 1) {
                    var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '"><button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.btn_addquote + '</button></div>';
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
            }

        }

        function addButtonList_2(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            // currentClass = 'ify-in-grid';
            if (jQuery(".ify-quote-group").length > 0) {
                jQuery(".ify-quote-group").each(function() {
                    var that = jQuery(this);
                    var prdId = jQuery(this).data('targetid');
                    var prdHandle = jQuery(this).data('targethandle');
                    var checkHandle = 0;
                    var productCurrent = '';
                    if (typeof appConfig.product !== 'undefined')
                        productCurrent = appConfig.product.id;
                    if (!that.hasClass('ify-has-modal')) {

                        if (jQuery.inArray(prdHandle, objectView) !== -1)
                            checkHandle = 1;

                        if (checkHandle == 1) {
                            if (prdId.toString() != productCurrent) {
                                that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                                that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                                if (config_reponse.remove_price == 1)
                                    removeFromlistingpage(that, ele_itemList, array_remove_price);
                                if (config_reponse.remove_button == 1)
                                    removeFromlistingpage(that, ele_itemList, array_remove_btn);
                            } else {
                                that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                                that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                                if (config_reponse.remove_price == 1)
                                    removeFromdetailpage(array_remove_price, ele_frm_detail);
                                if (config_reponse.remove_button == 1) {
                                    removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                    removeFromdetailpage(array_remove_btn, ele_frm_detail);
                                }
                            }
                        } else {
                            jQuery(this).find('button').remove();
                        }
                    }
                });
            } else {
                jQuery("a[href*='/products']").each(function() {
                    that = $(this);
                    var getlistUrl = that.attr('href');

                    getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                    sort_url = getlistUrlSub.split("?")[0];
                    if ($.inArray(sort_url, objectView) !== -1) {
                        var parentItem = that.closest(ele_itemList.trim());
                        var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-grid" data-targethandle="' + sort_url + '"><button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.btn_addquote + '</button></div>';
                        if (!parentItem.hasClass('ify-has-modal'))
                            parentItem.addClass('ify-has-modal').append(bntButton);
                        if (config_reponse.remove_price == 1)
                            removeFromlistingpage(that, ele_itemList, array_remove_price);
                        if (config_reponse.remove_button == 1)
                            removeFromlistingpage(that, ele_itemList, array_remove_btn)
                    }
                });
                if (appConfig.page.type == 'product') {
                    var sort_url = appConfig.product.handle;
                    if ($.inArray(sort_url, objectView) !== -1) {
                        if (jQuery('.ify-quote-group').length > 0) {
                            jQuery('.ify-quote-group').removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            jQuery('.ify-quote-group').children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                        } else {
                            var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '"><button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.btn_addquote + '</button></div>';
                            jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                        }

                        if (config_reponse.remove_price == 1)
                            removeFromdetailpage(array_remove_price, ele_frm_detail);
                        if (config_reponse.remove_button == 1) {
                            removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                            removeFromdetailpage(array_remove_btn, ele_frm_detail);
                        }
                    }
                }
            }
        }

        function addButtonList_1(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            // currentClass = 'ify-in-grid';
            if (jQuery(".ify-quote-group").length > 0) {
                jQuery(".ify-quote-group").each(function() {
                    var that = jQuery(this);
                    var prdId = jQuery(this).data('targetid');
                    var prdHandle = jQuery(this).data('targethandle');
                    var checkHandle = 0;
                    var productCurrent = '';
                    if (typeof appConfig.product !== 'undefined')
                        productCurrent = appConfig.product.id;
                    if (!that.hasClass('ify-has-modal')) {
                        if (prdId.toString() != productCurrent) {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                            if (config_reponse.remove_price == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_price);
                            if (config_reponse.remove_button == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_btn);
                        } else {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                            if (config_reponse.remove_price == 1)
                                removeFromdetailpage(array_remove_price, ele_frm_detail);
                            if (config_reponse.remove_button == 1) {
                                removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                removeFromdetailpage(array_remove_btn, ele_frm_detail);
                            }
                        }
                    }
                });
            } else {
                jQuery("a[href*='/products']").each(function() {
                    that = $(this);
                    var getlistUrl = that.attr('href');

                    getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                    sort_url = getlistUrlSub.split("?")[0];

                    var parentItem = that.closest(ele_itemList.trim());
                    var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-grid" data-targethandle="' + sort_url + '"><button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-1" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.btn_addquote + '</button></div>';
                    if (!parentItem.hasClass('ify-has-modal'))
                        parentItem.addClass('ify-has-modal').append(bntButton);
                    if (config_reponse.remove_price == 1)
                        removeFromlistingpage(that, ele_itemList, array_remove_price);
                    if (config_reponse.remove_button == 1)
                        removeFromlistingpage(that, ele_itemList, array_remove_btn)

                });
                if (appConfig.page.type == 'product') {
                    var sort_url = appConfig.product.handle;

                    if (jQuery('.ify-quote-group').length > 0) {
                        jQuery('.ify-quote-group').removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                        jQuery('.ify-quote-group').children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID);
                    } else {
                        var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '"><button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-1" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.btn_addquote + '</button></div>';
                        jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                    }

                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }

                }
            }
        }

        function removeCustom(array) {
            jQuery('body').find(array.trim()).remove();
        }

        function submitAjax(form, customerID) {
            jQuery.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': form.find("input[name='_token']").val()
                }
            });
            jQuery.ajax({
                type: 'POST',
                url: form.find('#storeify-action').val(),
                data: form.serialize(),
                async: true,
                cache: true,
                beforeSend: function() {
                    form.parent().addClass('storeify-frm-loading');
                    if(jQuery('.ify_print_content').length){
                        jQuery('.ify_print_content').html('');
                    }

                },

                success: function(response) {
                    form.parent().removeClass('storeify-frm-loading');
                    form.css("visibility", "hidden");
                    form.next(".storeify-requestaquote-mes").removeClass('storeify-mes-alert');
                    form.next(".storeify-requestaquote-mes").removeClass('storeify-mes-success');
                    form.next(".storeify-requestaquote-mes").html(response.mes);
                    form.next(".storeify-requestaquote-mes").show();
                    // form.find('input[name ="token"]').remove();
                    // form.find('input[name ="action"]').remove();
                    setTimeout(function() {
                        form.css("visibility", "visible");
                        form.next(".storeify-requestaquote-mes").html(response.mes);
                        form.next(".storeify-requestaquote-mes").hide();
                        form.find('.storeify-input-control').each(function() {
                            if (jQuery(this).hasClass('storeify-select') && jQuery(this).data('default') == '') {
                                jQuery(this).find('option:eq(0)').prop('selected', true);
                            } else {
                                jQuery(this).val(jQuery(this).data('default'));
                            }

                        });
                        form.find('.bg-success').html('');
                        form.find('.file-error-message').html('');

                    }, 5000);
                    if (response.status == 0) {
                        form.next(".storeify-requestaquote-mes").addClass('storeify-mes-alert');
                        jQuery('.storeify-empty-quote .g_message').text(response.mes);
                    } else {
                        form.find('.storeify-table-product tbody').html('');
                        Storeify_removeCookie(customerID);
                        form.next(".storeify-requestaquote-mes").addClass('storeify-mes-success');
                        // jQuery('#storeify_form_action_quote').hide();
                        // jQuery('.storeify-empty-quote .g_message').text(response.mes);
                        // jQuery('.storeify-empty-quote').show();
                        // if(jQuery('.ify_print_content').length){
                        //     var print_pdf = storeify_lang.print || 'Print PDF';
                        //     jQuery('.ify-group-button-continue').append('<button type="button" class="button btn quote-ify-print">'+print_pdf+'</button>');
                        //     jQuery('.ify_print_content').html(response.html_print);
                        // }
                        if (response.thankyoupage_url){
                            jQuery(location).attr('href', response.thankyoupage_url);
                        }else{
                            let urlSuccsess = root_url+'apps/request-a-quote/success?id='+ response.id;
                            jQuery(location).attr('href', urlSuccsess);
                        }
                    }

                }

            });
        }
        function ipLookUp (key, value) {
            var filter_country_value = JSON.parse(value.filter_country_value);
            jQuery.ajax({
                //async: false,
                method: "GET",
                url: "http://ipinfo.io/json?token=a6b442e7e8dece",
            }).done(function(response) {
                if(filter_country_value[0] == 1 ){
                    filter_country_value.splice(0, 1);
                    if(jQuery.inArray( response.country, filter_country_value ) != -1)
                    //if(filter_country_value[1] == response.country)
                        renderItem(key, value);
                }else{
                    filter_country_value.splice(0, 1);
                    if(jQuery.inArray( response.country, filter_country_value ) == -1)
                    // if(filter_country_value[1] != response.country)
                        renderItem(key, value);
                }
            });
        }
        function renderItem(key, value){
            if (jQuery('#storeify_form_quote').length) {
                if (config_reponse.enable_captcha == 1 && config_reponse.gg_site_key !== '' && config_reponse.gg_secret_key !== '') {
                    html_after += '<script type="text/javascript">' + 'function getCaptcha(ele,id){' + ' grecaptcha.ready(function() {' + ' grecaptcha.execute(\'' + config_reponse.gg_site_key + '\', {action: \'storeify_action_send_\'+id}).then(function(token) {' + ' $(ele+\' input[name="token"]\').val(token);' + ' $(ele+\' input[name="action"]\').val(\'storeify_action_send_\'+id);'

                    + '});;' + ' });' + '}' + 'var onloadCallback = function() {' + ' getCaptcha(\'.storeify-requestaquote-captcha\',\'0\');' + '};' + '$(\'#storeify_form_action_' + key + '\').submit(function() {' + 'getCaptcha(\'.storeify-requestaquote-captcha\',\'0\');' + '});' + '</script>';
                }
                var form_inner = value.html.replace('<form class="storeify-form-action-quote needs-validation"', '<div class="storeify-form-action-inner needs-validation-inner"');
                form_inner = form_inner.replace("</form", "</div");
                jQuery('#storeify_form_quote form').append(html_before + form_inner + html_after);
            }
            jviewFormbuilder(key, '', value.upload, max_file, file_size);
            if (value.show == '4')
                addButtonList_4(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
            if (value.show == '3')
                addButtonList_3(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
            if (value.show == '2')
                addButtonList_2(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
            if (value.show == '1')
                addButtonList_1(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
        }
        removeCustom(remove_ele_custom);
        jQuery.getJSON(requestaquote_json, function(data) {

            // if(config_reponse.enable_captcha == 1 && config_reponse.gg_site_key!==''){
            //          html_before = '<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render='+config_reponse.gg_site_key+'"></script>';
            //      }

            var html = '<div class="storeify-light-modal storeify-light-modal-quote storeify-mode-2 storeify-chooseproduct-modal" id="storeify-chooseproduct-modal" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false">';
            html += '<div class="storeify-light-modal-content storeify-animated storeifyfadeInDown">';
            html += '<div class="storeify-requestaquote storeify-frm-type-1  bootstrap-storeify" >';
            html += '<span class="storeify-frm-close"><i class="fa fa-times-circle"></i></span>';
            html += '<form class="storeify-form-action-quote needs-validation" method="POST">';
            html += '<div class="storeify-header-frm"></div>';
            html += '<div class="storeify-body-frm"></div>';
            html += '<div class="storeify-foooter-frm"><button class="storeify-submit-frm storeify-submit-btn storeify-add-to-quote" >' + storeify_lang.btn_addquote + '</button> <button class="storeify-submit-frm storeify-submit-btn storeify-modal-close" >' + storeify_lang.btn_continue + '</button></div>';
            html += '</form>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="storeify-light-modal storeify-light-modal-quote storeify-mode-2 storeify-mes-modal" id="storeify-mes-modal" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false">';
            html += '<div class="storeify-light-modal-content storeify-animated storeifyfadeInDown">';
            html += '<div class="storeify-requestaquote storeify-frm-type-1  bootstrap-storeify" >';
            html += '<span class="storeify-frm-close"><i class="fa fa-times-circle"></i></span>';
            html += '<div class="storeify-header-frm"></div>';
            html += '<div class="storeify-body-frm"></div>';
            
            html += '<div class="storeify-foooter-frm"><a href="'+root_url+'apps/request-a-quote/index" class="storeify-submit-frm storeify-submit-btn" >' + storeify_lang.btn_view + '</a> <button class="storeify-submit-frm storeify-submit-btn storeify-modal-close" >' + storeify_lang.btn_continue + '</button></div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            jQuery('body').append(html);
            jQuery.each(data, function(key, value) {
                if (value.status == 1 && key == config_reponse.html_mode) {

                    if(value.filter_lang == 1){
                        var filter_lang_value = JSON.parse(value.filter_lang_value);
                        if(filter_lang_value[0] == 1 ){
                            filter_lang_value.splice(0, 1);
                            if(jQuery.inArray( appConfig.locale, filter_lang_value ) == -1) return false;
                        }else{
                            filter_lang_value.splice(0, 1);
                            if(jQuery.inArray( appConfig.locale, filter_lang_value ) != -1) return false;
                        }
                    }
                    if(value.filter_country != 1){
                        renderItem(key, value);
                    }else{
                        ipLookUp(key, value);
                    }
                    //     if(appConfig.page.type == 'product'){

                    //     }else{
                    //      if(value.show == '3')
                    //          if(jQuery('.ify-quote-group').length){
                    // jQuery(".ify-quote-group").each(function(){

                    //  var prdId = jQuery(this).data('targetid');
                    //  var checkCollec = 0;
                    //  if(appConfig.collections[prdId]){
                    //      jQuery.each(appConfig.collections[prdId], function( i, v ) {
                    //        if(jQuery.inArray( v, value.view ))
                    //          checkCollec = 1;
                    //      });
                    //      if(checkCollec == 1){
                    //          jQuery(this).removeClass('ify-hide');
                    //      }
                    //  }

                    // });
                    //               }else{

                    //               }
                    //           else
                    //              console.log('không bằng 3');
                    //     }
                    // if( (value.view).length > 0 && value.show !== 'all'){
                    //  if(ify_short_code == 1)
                    //  findProductscode(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);
                    //  else
                    //  findProducts(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);

                    // }else{
                    //  if(ify_short_code == 1)
                    //  allProductscode(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);
                    //  else
                    //  allProducts(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);

                    // }
                }

            }); //end for
            jQuery('#storeify-requestaquote-hidden').remove();
            var storeify_lang_cf = {
                autoclose: true,
                ignoreReadonly: true,
                format: 'DD/MM/YYYY'
            };
            // //if(storeify_lang !== '') storeify_lang_cf = {locale:storeify_lang,autoclose:true,ignoreReadonly:true, format: 'DD/MM/YYYY'};
            jQuery(".datetimepicker-input").each(function() {
                storeify_lang_cf.format = jQuery(this).data('format');
                jQuery(this).datetimepicker(storeify_lang_cf);
            });
            var form_popup = jQuery('#storeify_form_action_quote');
            // jQuery.validator.addClassRules("storeify-number-font", { required: true,number: true });
            jQuery.validator.addClassRules("storeify-number-font", {number: true });
            form_popup.validate({
                submitHandler: function(form) {
                    var id = jQuery(form).find('input[name="id"]').val();
                    var key = jQuery(form).find('.captcha_side').val();
                    if(window.grecaptcha && key != '' && typeof id !== "undefined" && jQuery('#g-recaptcha-response-'+id).length > 0){
                         window.grecaptcha.ready(function() {
                                try {

                                 var query = window.grecaptcha.execute(key, {action:'validate_quote_captcha_'+id});
                                    query.then(function(token) {
                                     document.getElementById('g-recaptcha-response-'+id).value = token;
                                     document.getElementById('g-recaptcha-acction-'+id).value = 'validate_quote_captcha_'+id;
                                     submitAjax(jQuery(form), storeify_custommerId);
                                 });
                                    console.log('Captcha request success.');
                                } catch (e) {
                                    var message = e && e.message || 'Captcha request error.';
                                    alert('Error: ' + message);
                                }
                            });
                     }else{
                        submitAjax(jQuery(form), storeify_custommerId);
                     }
                    
                }
            });

        });
        // jQuery.each( config_reponse.items, function( key, value ) {
        //        if(value.show_all == 1 ){
        //          jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //        }else{
        //           if(meta.pageType == 'home' && jQuery.inArray('home-',value.pages) != -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //            if(meta.pageType == 'product' && typeof meta.resourceId !== 'undefined'){
        //              // console.log(jQuery.inArray(meta.resourceId.toString(),value.products))
        //              if(jQuery.inArray(meta.resourceId.toString(),value.products) !== -1 ){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }
        //            }
        //            if(meta.pageType == 'collection'){

        //              if(typeof meta.resourceId == 'undefined' && jQuery.inArray('catalog-',value.pages) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }

        //              if(typeof meta.resourceId != 'undefined' && jQuery.inArray(meta.resourceId.toString(),value.collections) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }
        //            }
        //            if(meta.pageType == 'collections' && typeof meta.resourceId == 'undefined' && jQuery.inArray('collections-',value.pages) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //            if( meta.pageType == 'searchresults' && jQuery.inArray('searchresult-',value.pages) !== -1 ){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }

        //            if(typeof meta.resourceId != 'undefined' && meta.pageType == 'page' ){
        //              if(jQuery.inArray('page-'+meta.resourceId.toString(),value.pages) != -1 ){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }
        //            }
        //            if(typeof meta.pageType == 'undefined' && window.location.pathname.indexOf('/cart') !== -1 && jQuery.inArray('cart',value.config.page_type) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //            if(typeof meta.pageType == 'undefined' && window.location.pathname.indexOf('/acount') !== -1 && jQuery.inArray('customers',value.config.page_type) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //        }
        //    });
        function setProduct(array_check, variant_id, qty = 1, price = 0) {
            if (String(array_check) !== 'undefined') {
                // console.log('qty:' + array_check.qty);
                //      array_check[]= { variant_id : variant_id, qty : array_check.qty + 1 };
                var check = 0;
                jQuery.each(array_check, function(key, value) {
                    if (value.variant_id == variant_id) {
                        array_check[key] = {
                            variant_id: variant_id,
                            qty: Number(value.qty) + Number(qty),
                            price: price
                        };
                        check = 1;
                    }

                })
                if (check == 0)
                    array_check.push({
                        variant_id: variant_id,
                        qty: qty,
                        price: price
                    });

            } else {
                array_check = [{
                    variant_id: variant_id,
                    qty: qty,
                    price: price
                }, ];

            }
            // array_check[variant_id] = 
            if(jQuery('#storeify-quote-widget').length){
                var quoteCount = Number(jQuery('.quote-widget-count').attr("data-count")) + Number(qty);
                jQuery('.quote-widget-count').text(quoteCount).attr("data-count",quoteCount);
            }
            return array_check;
        }
        jQuery(document).ready(function() {

            jQuery(document).on("click", ".storeify-quote-btn-trigger-popup", function(e) {
                e.preventDefault();
                var that = jQuery(this);
                that.prop('disabled', true);
                var html_title = '';
                var put_product = {};
                var storeify_getCookie = Storeify_getCookie(storeify_custommerId);
                if (storeify_getCookie) {
                    put_product = JSON.parse(storeify_getCookie);
                }
                if(jQuery.isEmptyObject(put_product)){
                     jQuery('.quote-widget-count').text(0).attr("data-count",0);
                }
                var variant_id = '';
                var qty = 1;
                if (jQuery(this).parent().hasClass('storeify-button-detail')) {
                    if (variant_element != '') {
                        variant_id = jQuery(ele_frm_detail).find(variant_element).val();
                    } else {
                        variant_id = jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('[name="id"]').val();
                    }
                    if (qty_element != '') {
                        qty = jQuery(ele_frm_detail).find(qty_element).val();
                    } else {
                        qty = jQuery(ele_frm_detail).find('input[name="quantity"]').val();
                    }
                }
                // if (variant_id != '' && typeof variant_id !== "undefined" && window.meta.product.variants && ify_show_input_price != 1) {
                //     var handle_txt = jQuery(this).data('product');
                //     put_product[handle_txt] = setProduct(put_product[handle_txt], variant_id, qty);
                //     //console.log(put_product[handle_txt])
                //     Storeify_setCookie(storeify_custommerId, JSON.stringify(put_product), storeify_days);
                //     jQuery('#storeify-mes-modal').addClass('target');
                // } else {
                var pricePrd = 0;var priceDefault = 0;
                jQuery.getJSON('/products/' + jQuery(this).data('product') + '.js', function(data) {
                    var handle_txt = data.handle;
                    var check_first = 0;
                    if (data.variants.length > 0) {
                        var hide_css = '';
                        if(data.variants.length == 1) hide_css = 'style="display:none;"';
                        var html_option = '<div class="storeify-frm-group storeify-div-select storeify-div-input storeify-option-variants" '+hide_css+'><select id="storeify_option_variants" class="storeify-input-control storeify-select form-control-select">';
                        var html_img = '';
                        var html_content = '';
                        var src_img = '';
                        if (data.featured_image) src_img = data.featured_image;
                        jQuery.each(data.variants, function(k, v) {
                            if (v.featured_image) src_img = v.featured_image.src;
                            var priceCookie = 0; 
                            if(typeof put_product[handle_txt] !== 'undefined'){
                                jQuery.each(put_product[handle_txt], function(i, p) {
                                    if(p.variant_id == v.id)
                                    priceCookie = p.price || 0;
                                })
                            }
                            html_title = '<h5 class="variant-title">' + data.title + '</h5>';
                            html_img = '<div class="ify-product-thumbnail"><img class="storeify-thumbnail" src="' + src_img + '" /></div>';
                            if( (v.available == true && appConfig.hide_variants_outofstock == 1) || appConfig.hide_variants_outofstock == 0){
                                if (check_first == 0) {
                                    check_first = 1;
                                    pricePrd = priceCookie;
                                    priceDefault = v.price;
                                    html_title = '<h5 class="variant-title">' + v.name + '</h5>';
                                    html_img = '<div class="ify-product-thumbnail"><img class="storeify-thumbnail" src="' + src_img + '" /></div>';
                                    html_option += '<option selected="selected" value="' + v.id + '" data-pricedefault="'+v.price+'" data-price="'+priceCookie+'" data-img="' + src_img + '" data-name="' + v.name + '">' + v.title + '</option>';
                                } else {
                                    html_option += '<option value="' + v.id + '" data-pricedefault="'+v.price+'" data-price="'+priceCookie+'" data-img="' + src_img + '" data-name="' + v.name + '">' + v.title + '</option>';
                                }
                            }

                        });
                        html_option += '</select><i class="storeify-select-arrow"></i></div>';
                        if(ify_show_input_price == 1){
                            var priceText = storeify_lang.old_price+': '+formatMoney(priceDefault,appConfig.money_format );
                            price_element_html = '<div class="storeify-frm-group storeify-col-1 ify_price_group"><div class="storeify-div-input">';
                            if(pricePrd == 0)
                                price_element_html += '<input type="text" class="storeify-input-control storeify-input-text ify_price_input" placeholder="'+storeify_lang.your_price+'" name="ify_price" id="ify_price_input" ><em class="ify-price-default">'+priceText+'</em>';
                            else
                                price_element_html += '<input type="text" class="storeify-input-control storeify-input-text ify_price_input" placeholder="'+storeify_lang.your_price+'" name="ify_price" id="ify_price_input" value="'+pricePrd+'"><em class="ify-price-default">'+priceText+'</em>';
                            price_element_html += '</div></div>';
                            html_option += price_element_html;
                        }
                        var html_handle_txt = '<input type="hidden" value="'+handle_txt+'" id="ify_handle_txt">';
                        html_content = '<div class="ify-product-head">'+ html_handle_txt + html_img + '</div><div class="ify-product-body">' + html_title + html_option + '</div>';
                        // jQuery('#storeify-chooseproduct-modal .storeify-header-frm').html(html_title);
                        jQuery('#storeify-chooseproduct-modal .storeify-body-frm').html(html_content);
                        jQuery('#storeify-chooseproduct-modal').addClass('target');
                        if (variant_id != '' && typeof variant_id !== "undefined" && variant_id != null && appConfig.hide_variants_outofstock == 0)
                            jQuery('#storeify_option_variants').val(variant_id).trigger('change');
                        if(check_first != 0)
                            jQuery('.storeify-add-to-quote').prop('disabled', false).show();
                        else
                            jQuery('.storeify-add-to-quote').prop('disabled', true).hide();

                    } else {
                        html_title = '<h5>' + (storeify_lang.add_title).replace('{{product}}', data.title) + '</h5>';
                        // jQuery('#storeify-mes-modal .storeify-header-frm').html(html_title);
                        jQuery('#storeify-mes-modal .storeify-body-frm').html(html_title);
                        var product_param = String(data.variants[0].id);
                        put_product[handle_txt] = setProduct(put_product[handle_txt], product_param);
                        jQuery('#storeify-mes-modal').addClass('target');
                        Storeify_setCookie(storeify_custommerId, JSON.stringify(put_product), storeify_days);

                    }


                    that.prop('disabled', false);
                    //Storeify_setCookie(storeify_custommerId,JSON.stringify(data),storeify_days);
                    // jQuery.ajaxSetup({
                    //     headers: {
                    //         'X-CSRF-TOKEN': form.find("input[name='_token']").val()
                    //     }
                    //  });


                });
                // }
                //   }else{
                //      var handle_txt = jQuery(this).data('product');
                //      var variantId = jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').eq(0).find('[name="id"]').val();
                //      if(variantId && window.meta.product.variants ){
                //          jQuery.each( window.meta.product.variants, function( k, v ) {
                //              if( String(v.id) === String(variantId)){
                //                  html_title = '<h5>'+v.name+'</h5>';
                //                  return false;
                //              }
                //          });
                //          put_product[handle_txt] = setProduct(put_product[handle_txt],variantId);
                //          // if( (window.meta.product.variants).length > 1 )
                //          //  put_product[handle_txt] = setProduct(put_product[handle_txt],variantId);
                //          // else
                //          //  put_product[handle_txt] = setProduct(put_product[handle_txt],'default');


                //      }
                //      // console.log(put_product);
                // Storeify_setCookie(storeify_custommerId,JSON.stringify(put_product),storeify_days);
                //      jQuery('#storeify-mes-modal .storeify-body-frm').html(html_title);
                //    jQuery('#storeify-mes-modal').addClass('target');
                //   }
                that.prop('disabled', false);

            });
            jQuery(document).on("click", ".storeify-add-to-quote", function(e) {
                e.preventDefault();
                jQuery(this).prop('disabled', true);
                jQuery('#storeify-chooseproduct-modal').removeClass('target');
                var select_variant = jQuery(this).closest('#storeify-chooseproduct-modal').find('#storeify_option_variants');
                var product_param = select_variant.val();
                html_title = '<h5>' + (storeify_lang.add_title).replace('{{product}}', select_variant.children('option:selected').data('name')) + '</h5>';
                jQuery('#storeify-mes-modal .storeify-body-frm').html(html_title);
                var pricePrd = 0;
                if(jQuery('#ify_price_input').length > 0 )
                    pricePrd = jQuery('#ify_price_input').val();
                var handle_txt = jQuery('#ify_handle_txt').val();
                var put_product = {};
                var storeify_getCookie = Storeify_getCookie(storeify_custommerId);
                if (storeify_getCookie) {
                    put_product = JSON.parse(storeify_getCookie);
                }
                
                if(jQuery.isEmptyObject(put_product)){
                     // console.log(put_product);
                     jQuery('.quote-widget-count').text(0).attr("data-count",0);
                }
                put_product[handle_txt] = setProduct(put_product[handle_txt], product_param,1,pricePrd);
                
                Storeify_setCookie(storeify_custommerId, JSON.stringify(put_product), storeify_days);
                jQuery('#storeify-mes-modal').addClass('target');
            });
            jQuery(document).on("change", "#storeify_option_variants", function(e) {
                var parent = jQuery(this).parent().parent().parent();
                var title = parent.find('h5.variant-title');
                var img = parent.find('.storeify-thumbnail');
                var option = jQuery(this).find(":selected");
                img.attr('src', option.data('img'));
                title.html(option.data('name'));
                if(jQuery('#ify_price_input').length){
                    if(option.data('price') != 0){
                        jQuery('#ify_price_input').val(option.data('price'));
                    }else{
                        jQuery('#ify_price_input').val('');
                    }
                }
                if(jQuery('.ify-price-default').length){
                    jQuery('.ify-price-default').html(storeify_lang.old_price+': '+formatMoney(option.data('pricedefault'),appConfig.money_format ));
                }
            })
            jQuery(document).on("click", ".storeify-requestaquote-button", function(e) {
                e.preventDefault();
                var target = jQuery(this).data('target');

                jQuery(target).addClass('target');
            });
            jQuery(document).on("click", ".storeify-frm-close,.storeify-modal-close", function(e) {
                e.preventDefault();
                var target = jQuery(this).closest('.storeify-light-modal');
                jQuery(target).removeClass('target');
            });

            // table product
            var get_product = {};
            var tbl_product = '';
            var storeify_getCookieCurrent = Storeify_getCookie(storeify_custommerId);
            if (storeify_getCookieCurrent) {
                get_product = JSON.parse(storeify_getCookieCurrent);
            }

            if (Object.keys(get_product).length) {
                jQuery('#storeify_form_action_quote').show();
            } else {
                jQuery('.storeify-empty-quote').show();
            }
            if(config_reponse.enable_widget == 1){
                var quoteCount = 0;
                jQuery.each(get_product, function(key, value) {
                    jQuery.each(value, function(k, v) {
                        quoteCount += Number(v.qty);
                    })
                });
                const objWidgetcoloer = JSON.parse(config_reponse.widget_color);
                var quoteHtml = '<a href="/apps/request-a-quote/index" title="'+config_reponse.widget_text+'" id="storeify-quote-widget" style="color:#'+objWidgetcoloer.text+';background:#'+objWidgetcoloer.bg+'" class="storeify-quote-widget storeify-quote-widget-style-0 storeify-quote-widget-position-'+config_reponse.widget_position+'"><div class="widget-button-inner">';
                if(config_reponse.widget_icon != '' && config_reponse.widget_icon != null)
                    quoteHtml += '<i class="quote-widget-icon '+config_reponse.widget_icon+'"></i>';
                if(config_reponse.widget_text != '' && config_reponse.widget_text != null)
                    quoteHtml += '<div class="quote-widget-label">'+config_reponse.widget_text+'</div>';

                quoteHtml += '<span class="quote-widget-count" data-count="'+Number(quoteCount)+'">'+Number(quoteCount)+'</span>';
                quoteHtml += '</div></a>';
                jQuery('body').append(quoteHtml);
            }
            if (appConfig.page && appConfig.page.path == root_url+'apps/request-a-quote/index') {
                var oldPriceTotal_value = Number(jQuery('.old-total-item').data('value'));
                var yourPriceTotal_value =  Number(jQuery('.your-total-item').data('value'));
                jQuery.each(get_product, function(key, value) {
                    jQuery.ajax({
                        url: '/products/' + key + '.js',
                        method: 'GET',
                        async: false,
                        cache: false,
                        data: {},
                        dataType: 'json',
                        beforeSend: function() {
                            jQuery('.storeify-table-product').append('<tr class="loading"><td colspan="5">Loading...........</td></tr>');

                        },
                    }).done(function(data) {
                            jQuery('#storeify_form_action_quote').show();
                            jQuery('.storeify-empty-quote').hide();
                            jQuery('.storeify-table-product .loading').remove();
                            // if(value.variant_id !== 'default'){
                            //  jQuery.each( data.variants, function( k, v ) {
                            //      if(String(v.id) == String(value.variant_id) ) title_product = v.name;
                            //  })
                            // }
                            var title_product = data.title;
                            var thumb_product = '<img src="' + data.featured_image + '" width="100" />';
                            var link_product = '/products/' + key;
                            var sku_product = '';
                            var option_product = '';
                            var qty_product = 1;
                            var storeify_price = '';
                            var oldPrice = 0;
                            var oldPrice_value = 0;
                            var oldPriceTotal = 0;
                            var totalPrice_Html ='';
                            //var hide_css = '';
                            jQuery.each(value, function(k, v) {
                                if (v.variant_id !== 'default') {
                                    jQuery.each(data.variants, function(i, j) {
                                        if (String(v.variant_id) == String(j.id)) {
                                            title_product = j.name;
                                            if (j.featured_image)
                                                thumb_product = '<img src="' + j.featured_image.src + '" width="100" />';
                                            link_product = '/products/' + key + '?variant=' + j.id;
                                            sku_product = j.sku || '';
                                            if(j.title != 'Default Title')
                                            option_product = j.title;
                                            oldPrice_value = j.price;
                                            oldPrice = formatMoney(j.price,appConfig.money_format );
                                        }
                                    })
                                }
                                qty_product = v.qty;
                                var storeify_input = '<input type="hidden" name="storeify_product[option][]" value="' + option_product + '"> <input type="hidden" name="storeify_product[handle][]" value="' + key + '"><input type="hidden" name="storeify_product[name][]" value="' + title_product + '"><input type="hidden" name="storeify_product[id][]" value="' + data.id + '"><input type="hidden" name="storeify_product[variant][]" value="' + v.variant_id + '">';
                                var storeify_groupsize = '<div class="storeify-frm-groupsize"><input class="form-control storeify-number storeify-number-font" type="text" name="storeify_product[qty][]" value="' + qty_product + '"><span class="storeify-btn-add">+</span><span class="storeify-btn-minus">-</span></div>';
                                if(config_reponse.remove_price == 0){
                                     storeify_price = '<th class="old-price-item" data-value ="'+oldPrice_value+'">'+oldPrice+'</th>';
                                }
                                if(ify_show_input_price == 1){
                                    yourPriceTotal_value += (v.price)*qty_product;
                                    jQuery('.your-total-item').html(formatMoney(yourPriceTotal_value*100,appConfig.money_format )).attr('data-value',yourPriceTotal_value);
                                    storeify_price += '<th class="your-price-item"><input class="form-control storeify-number storeify-number-font storeify-number-price" type="text" name="storeify_product[price][]" value="' + v.price + '"></th>'
                                }
                                jQuery('.storeify-table-product tbody').append('<tr class="list_product_quote"><th>' + thumb_product + '</th><th class="storeify-item-name"><a href="' + link_product + '" >' + title_product + '</a>' + storeify_input + '</th><th class="p-sku"><input type="hidden" name="storeify_product[sku][]" value="' + sku_product + '">' + sku_product + '</th><th class="p-variant">' + option_product + '</th>'+storeify_price+'<th class="p-qty">' + storeify_groupsize + '</th><th class="storeify-del"><i class="storeify-del-product fas fa-trash-alt"></i></th></tr>');
                                oldPriceTotal_value += oldPrice_value*qty_product;
                                jQuery('.old-total-item').html(formatMoney(oldPriceTotal_value,appConfig.money_format )).attr('data-value',oldPriceTotal_value);
                                if(data.variants.length == 1) {
                                    //hide_css = 'style="display:none;"';
                                    //jQuery('.p-variant').hide();
                                }
                            });
                            console.log(oldPriceTotal_value);
                        })
                    // });
                    // console.log(key);
                    // console.log(value);

                });
                // var customerInfo = appConfig.customer;
                // if (customerInfo && typeof customerInfo.id !== 'undefined') {
                //     var id = jQuery('input[name="id"]').val();
                //     jQuery('#storeifyInput_first_name_' + id).val(customerInfo.first_name);
                //     jQuery('#storeifyInput_last_name_' + id).val(customerInfo.last_name)
                //     jQuery('#storeifyInput_email_' + id).val(customerInfo.email)
                //     jQuery('#customer_' + id).val(customerInfo.id)
                // }

            } //end table
            function triggerQty(){
                var totalOld = 0;
                var totalNew = 0;
                jQuery('table.storeify-table-product tbody').find('.list_product_quote').each(function(){
                    // cache jquery var
                    var current = $(this);
                    var qty = current.find('.p-qty input.storeify-number').val();
                    if(Number.isInteger(Number(qty)) == false){
                        qty = 0 ; 
                    }
                    if(jQuery('.old-price-item').length){
                        totalOld += Number(current.find('.old-price-item').data('value'))*Number(qty);
                    }
                    if(jQuery('.your-price-item').length){
                        totalNew += Number(current.find('.your-price-item input.storeify-number').val())*Number(qty);
                    }
                });
                jQuery('.old-total-item').html(formatMoney(totalOld,appConfig.money_format )).attr('data-value',totalOld);
                jQuery('.your-total-item').html(formatMoney(totalNew*100,appConfig.money_format )).attr('data-value',totalNew);
            }
            jQuery(document).on("change", "table.storeify-table-product .p-qty input.storeify-number", function(e) {
                triggerQty();
            })
            jQuery(document).on("change", "table.storeify-table-product .your-price-item input.storeify-number", function(e) {
                triggerQty();
            })
            jQuery(document).on("click", ".storeify-btn-add", function(e) {
                // $(".storeify-btn-add").click(function(){
                var counter = parseInt(jQuery(this).parent().children('input').val());
                counter++;
                jQuery(this).parent().children('input').val(counter);
                var parent_data = jQuery(this).parent().parent().parent().children('.storeify-item-name');
                if (Object.keys(get_product).length)
                    jQuery.each(get_product, function(key, value) {
                        if (parent_data.find('input[name="storeify_product[handle][]"]').val() == key) {
                            jQuery.each(value, function(k, v) {
                                if (parent_data.find('input[name="storeify_product[variant][]"]').val() == String(v.variant_id)) {
                                    get_product[key][k].qty = counter;
                                    return false;
                                }
                            })
                        }
                    })
                // console.log(get_product)
                Storeify_setCookie(storeify_custommerId, JSON.stringify(get_product), storeify_days);
                triggerQty();
            });
            jQuery(document).on("click", ".storeify-btn-minus", function(e) {
                // $(".storeify-btn-minus").click(function(){
                var counter = parseInt(jQuery(this).parent().children('input').val());
                counter--;
                if (counter >= 1)
                    jQuery(this).parent().children('input').val(counter);
                else
                    jQuery(this).parent().children('input').val(1);

                var parent_data = jQuery(this).parent().parent().parent().children('.storeify-item-name');
                if (Object.keys(get_product).length)
                    jQuery.each(get_product, function(key, value) {
                        if (parent_data.find('input[name="storeify_product[handle][]"]').val() == key) {
                            jQuery.each(value, function(k, v) {
                                if (parent_data.find('input[name="storeify_product[variant][]"]').val() == String(v.variant_id)) {
                                    if (v.qty > 1) {
                                        get_product[key][k].qty = counter;
                                        return false;
                                    }
                                }
                            })
                        }
                    })
                // console.log(get_product)
                Storeify_setCookie(storeify_custommerId, JSON.stringify(get_product), storeify_days);
                triggerQty();
            });
            jQuery(document).on("click", ".storeify-del-product", function(e) {
                // $(".storeify-btn-minus").click(function(){

                var parent_data = jQuery(this).parent().parent().children('.storeify-item-name');
                if (Object.keys(get_product).length)
                    jQuery.each(get_product, function(key, value) {
                        if (parent_data.find('input[name="storeify_product[handle][]"]').val() == key) {
                            if (get_product[key].length > 1)
                                jQuery.each(value, function(k, v) {
                                    if (v.variant_id && parent_data.find('input[name="storeify_product[variant][]"]').val() == String(v.variant_id)) {
                                        get_product[key].splice(k, 1);

                                        return false;
                                    }
                                })
                            else {
                                delete get_product[key];
                                return false;
                            }
                        }
                    })
                jQuery(this).parent().parent().remove();
                if (!Object.keys(get_product).length) {
                    jQuery('#storeify_form_action_quote').hide();
                    jQuery('.storeify-empty-quote').show();
                }
                Storeify_setCookie(storeify_custommerId, JSON.stringify(get_product), storeify_days);
                triggerQty();
            });
            jQuery(document).on('click', '.quote-ify-print', function(e) {
                e.preventDefault();
                var contents = jQuery(".ify_print_content").html();
                const d = new Date();
                let time = d.getTime();
                document.title='Quote #'+time;
                var frame1 = jQuery('<iframe />');
                frame1[0].name = "frame1";
                frame1.css({ "position": "absolute", "top": "-1000000px" });
                jQuery("body").append(frame1);
                var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
                frameDoc.document.open();
                //Create a new HTML document.
                frameDoc.document.write('<html><head><title>Quote Form</title>');
                var style = '<style>';
                style += 'body{text-align:left;}';
                style += '.confirm-success{display:none}';
                style += '.confirm-product{display:block;width:100%;text-align: center;padding-bottom: 15px;}';
                style += '.prd-thumb{position: relative;display: inline-block;overflow: hidden;width: 120px;background: #fff;border: 0.1rem solid #e1e3e5;border-radius: 10px}';
                style += '.prd-thumb img{position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;max-width: 100%;max-height: 100%;}';
                style += '.prd-thumb:after {content: "";display: block;padding-bottom: 100%;}';
                style += '.prd-title{font-size: 15px;font-weight: 600;padding:15px 0 20px 0}';
                // style += '.confirm-booking,.confirm-total{flex-direction: column;align-items: flex-start;display: flex;justify-content: space-between;font-size: 14px;width:500px;margin:0 auto;}';
                // style += '.confirm-booking > div,.confirm-total > div{width: 100%;margin-bottom: 5px;padding-bottom: 5px;display: flex;justify-content: space-between;}';
                // style += '.confirm-booking label,.confirm-total label{display: inline-block;margin-right: 2px;font-weight: 600;}';
                style += '</style>';
                frameDoc.document.write(style);
                frameDoc.document.write('</head><body>');
                frameDoc.document.write(contents);
                frameDoc.document.write('</body></html>');
                frameDoc.document.close();
                setTimeout(function () {
                    
                    window.frames["frame1"].focus();
                    window.frames["frame1"].print();
                    frame1.remove();
                }, 500);
            });

        });

    }; //end storeifyJavaScript

    function check_storeify_quote_scripttag() {
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].innerText.indexOf('asyncLoad') >= 0 && scripts[i].innerText.indexOf("quote.storeify.app") >= 0) {
                console.log('Storeify Quote app is working.');
                return true;
            }
        }
        return false;
    }

    if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
        loadScript('//code.jquery.com/jquery-1.11.1.min.js', function() {
            STOREIFY = jQuery.noConflict(true);
            STOREIFY(document).ready(function() {
                if (check_storeify_quote_scripttag()) {
                    storeifyJavaScript(STOREIFY);
                }
            });
        });
    } else {
        if (check_storeify_quote_scripttag()) {
            storeifyJavaScript(jQuery);
        }
    }

})();