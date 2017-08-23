export const loadTournament = async (phaseGroupId) => {
  const targetUrl = `https://api.smash.gg/tournament/${phaseGroupId}`;
  const tailEndUrl = `/event/super-smash-bros-melee/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=1&per_page=100`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const getFetch = await fetch(proxyUrl + targetUrl + tailEndUrl);
  const getJson = await getFetch.json();
  return getJson;
}
