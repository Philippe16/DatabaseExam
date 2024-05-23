const WeaponSkins = async ({
  params,
}: {
  params: { type: string; weapon: string };
}) => {
  return (
    <div className="py-20 text-gray-100">
      <h1>Type: {params.type}</h1>
      <h1>Weapon: {params.weapon}</h1>
    </div>
  );
};

export default WeaponSkins;
