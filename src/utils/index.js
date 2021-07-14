const urlBuilder = (urlComponents) =>{
    let finalUrl = ''
    const { base_url, query_params } = urlComponents;
    finalUrl += base_url + '?';
    // construct object to URL form.
    const queryComponents  = new URLSearchParams(query_params).toString()
    // alternative. current impl is simple.
    // const queryComponents = Object.entries(query_params).map(([key,val])=>`${key}=${encodeURIComponent(val)}`).join('$');
    // baseURL+queryparams
    finalUrl += queryComponents;   
    return finalUrl;

}

export default urlBuilder;