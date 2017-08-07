const baseUrl = 'https://api.smash.gg/tournament/'

export const loadTournament = (phaseGroupId) => {

  const targetUrl = `${baseUrl}${phaseGroupId}?expand[]=phase&expand[]=groups&expand[]=event`;
  // const targetUrl = `${baseUrl}${phaseGroupId}/event/melee-singles?expand[]=phase&expand[]=groups&expand[]=event`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  return (
    fetch(proxyUrl + targetUrl).then(res => res.json())
  )
}
