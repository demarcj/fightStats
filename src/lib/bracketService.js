

export const loadBracket = (phaseGroupId, pageNum) => {
  const targetUrl = `https://api.smash.gg/tournament/${phaseGroupId}/event/super-smash-bros-melee/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=${pageNum}&per_page=100`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  return fetch(proxyUrl + targetUrl).then(res => res.json())
}
