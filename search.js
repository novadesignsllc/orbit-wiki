const PAGES=[{"t":"Welcome to the orBIT Wiki","u":"index.html","k":"Main page"},{"t":"How to play","u":"getting-started.html","k":"Guide"},{"t":"Ultimates","u":"ultimates.html","k":"Mechanic"},{"t":"Runs","u":"runs.html","k":"Mechanic"},{"t":"Leveling and cards","u":"leveling.html","k":"Mechanic"},{"t":"Damage and difficulty","u":"damage.html","k":"Mechanic"},{"t":"Weapons","u":"weapons.html","k":"Category"},{"t":"Pulse Cannon","u":"weapon-pulse.html","k":"Weapon"},{"t":"Spread Shot","u":"weapon-spread.html","k":"Weapon"},{"t":"Seekers","u":"weapon-missile.html","k":"Weapon"},{"t":"Arc Laser","u":"weapon-laser.html","k":"Weapon"},{"t":"Orbit Drones","u":"weapon-drones.html","k":"Weapon"},{"t":"Chain Zap","u":"weapon-chain.html","k":"Weapon"},{"t":"Shockwave","u":"weapon-shockwave.html","k":"Weapon"},{"t":"Railgun","u":"weapon-railgun.html","k":"Weapon"},{"t":"Glaive","u":"weapon-glaive.html","k":"Weapon"},{"t":"Singularity","u":"weapon-singularity.html","k":"Weapon"},{"t":"Sawblade","u":"weapon-saws.html","k":"Weapon"},{"t":"Napalm","u":"weapon-napalm.html","k":"Weapon"},{"t":"Flak Cannon","u":"weapon-flak.html","k":"Weapon"},{"t":"Ricochet","u":"weapon-ricochet.html","k":"Weapon"},{"t":"Ion Field","u":"weapon-field.html","k":"Weapon"},{"t":"Stasis Ray","u":"weapon-stasis.html","k":"Weapon"},{"t":"Purge Beam","u":"weapon-purge.html","k":"Weapon"},{"t":"Orbital Strike","u":"weapon-strike.html","k":"Weapon"},{"t":"Flamethrower","u":"weapon-flamer.html","k":"Weapon"},{"t":"Systems","u":"systems.html","k":"Category"},{"t":"Overclock","u":"system-overclock.html","k":"System"},{"t":"Payload","u":"system-payload.html","k":"System"},{"t":"Capacitor","u":"system-capacitor.html","k":"System"},{"t":"Power Coils","u":"system-coils.html","k":"System"},{"t":"Tractor Beam","u":"system-magnet.html","k":"System"},{"t":"Hull Plating","u":"system-plating.html","k":"System"},{"t":"Reflector","u":"system-reflector.html","k":"System"},{"t":"Targeting","u":"system-targeting.html","k":"System"},{"t":"Amplifier","u":"system-amplifier.html","k":"System"},{"t":"Salvager","u":"system-salvager.html","k":"System"},{"t":"Stabilizer","u":"system-stabilizer.html","k":"System"},{"t":"Nanites","u":"system-nanites.html","k":"System"},{"t":"Phoenix Core","u":"system-phoenix.html","k":"System"},{"t":"Bad Omen","u":"system-omen.html","k":"System"},{"t":"Lucky Charm","u":"system-charm.html","k":"System"},{"t":"Evolutions","u":"evolutions.html","k":"Mechanic"},{"t":"Ships","u":"ships.html","k":"Category"},{"t":"Vanguard","u":"ship-vanguard.html","k":"Ship"},{"t":"Wasp","u":"ship-wasp.html","k":"Ship"},{"t":"Bulwark","u":"ship-bulwark.html","k":"Ship"},{"t":"Specter","u":"ship-specter.html","k":"Ship"},{"t":"Nova","u":"ship-nova.html","k":"Ship"},{"t":"Comet","u":"ship-comet.html","k":"Ship"},{"t":"Warden","u":"ship-warden.html","k":"Ship"},{"t":"Planets","u":"planets.html","k":"Category"},{"t":"Earth","u":"planet-earth.html","k":"Planet"},{"t":"Europa","u":"planet-europa.html","k":"Planet"},{"t":"Mars","u":"planet-mars.html","k":"Planet"},{"t":"Mercury","u":"planet-mercury.html","k":"Planet"},{"t":"Enemies","u":"enemies.html","k":"Category"},{"t":"Bosses","u":"bosses.html","k":"Category"},{"t":"Hangar","u":"hangar.html","k":"Progress"},{"t":"Unlocks and secrets","u":"unlocks.html","k":"Progress"},{"t":"Free trial and full game","u":"full-game.html","k":"Guide"},{"t":"Privacy policy","u":"privacy.html","k":"Legal"},{"t":"Credits","u":"credits.html","k":"Help"},{"t":"Support","u":"support.html","k":"Help"}];
// Search box: matches page titles as you type. PAGES is written above this by the build.
(() => {
  const q = document.getElementById('q');
  const box = document.getElementById('results');
  let sel = -1;
  let hits = [];
  const render = () => {
    box.innerHTML = hits
      .map((p, i) => `<a class="${i === sel ? 'sel' : ''}" href="${p.u}">${p.t}<small>${p.k}</small></a>`)
      .join('');
    box.style.display = hits.length ? 'block' : 'none';
  };
  q.addEventListener('input', () => {
    const s = q.value.trim().toLowerCase();
    sel = -1;
    hits = s ? PAGES.filter((p) => p.t.toLowerCase().includes(s) || p.k.toLowerCase().includes(s)).slice(0, 12) : [];
    hits.sort((a, b) => a.t.toLowerCase().indexOf(s) - b.t.toLowerCase().indexOf(s));
    render();
  });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') sel = Math.min(hits.length - 1, sel + 1);
    else if (e.key === 'ArrowUp') sel = Math.max(0, sel - 1);
    else if (e.key === 'Enter' && hits.length) location.href = hits[Math.max(0, sel)].u;
    else return;
    e.preventDefault();
    render();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) box.style.display = 'none';
  });
})();
