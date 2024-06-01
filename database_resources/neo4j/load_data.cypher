// Clear the database
MATCH (n)
DETACH DELETE n;

// Import weapons CSV and create nodes
LOAD CSV WITH HEADERS FROM 'file:///csgo_weapons.csv' AS row
MERGE (w:Weapon {id: toInteger(row.id)})
SET w.name = row.name, w.type = row.type, w.src = row.src, w.description = row.description;

// Import skins CSV and create nodes
LOAD CSV WITH HEADERS FROM 'file:///csgo_skins.csv' AS row
MERGE (s:Skin {id: toInteger(row.id)})
SET s.name = row.name, s.src = row.src, s.price = toFloat(row.price), s.weapon_id = toInteger(row.weapon_id);

// Make relations between skins and weapons via weapon_id
MATCH (w:Weapon), (s:Skin)
WHERE w.id = s.weapon_id
MERGE (s)-[:BELONGS_TO]->(w);

// Give skin two new variables for rating
MATCH (s:Skin)
SET s.rating = 0,
    s.totalRatings = 0;
