const baseUrl = 'https://api.smash.gg/tournament/'

export const loadTouranment = (phaseGroupId) => {

  const targetUrl = `${baseUrl}${phaseGroupId}?expand[]=event&expand[]=phases`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  return (
    fetch(proxyUrl + targetUrl).then(res => res.json())
  )
}
