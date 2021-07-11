const urlBuilder = (urlComponents) =>{
    let finalUrl = ''
    const { base_url, query_params } = urlComponents;
    finalUrl += base_url + '?';
    const queryComponents  = new URLSearchParams(query_params).toString()
    // alternative
    // const queryComponents = Object.entries(query_params).map(([key,val])=>`${key}=${encodeURIComponent(val)}`).join('$');
    finalUrl += queryComponents;   
    return finalUrl;

}

export default urlBuilder;