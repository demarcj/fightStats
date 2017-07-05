const baseUrl = 'https://api.smash.gg/phase_group/'

export const loadBracket = (phaseGroupId) => {

  const targetUrl = `${baseUrl}${phaseGroupId}?expand[]=sets&expand[]=seeds`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  return (
    fetch(proxyUrl + targetUrl).then(res => res.json())
  )
}
