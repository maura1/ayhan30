

const Impressum = () => {
  return (
    <div className="bg-softWhiteC px-6 md:px-48 py-12">
      {/* Heading */}
      <div className="relative text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-medium text-blackC">Impressum</h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-lg">
       

        {/* Inhaberin */}
        <p className="font-bold text-left">Inhaberin:</p>
        <p className="text-left">Ayhan Kublay</p>

        {/* Address */}
        <p className="font-bold text-left">Adresse:</p>
        <p className="text-left">
          Frauenstr. 30a
          86830 Schwabmünchen
          <br />
          
        </p>

        {/* Telefon */}
        <p className="font-bold text-left">Telefon:</p>
        <p className="text-left">0151-1155 30 31</p>

        {/* Email */}
        <p className="font-bold text-left">Email:</p>
        <p className="text-left">info@ayhankublay.de</p>

        {/* Internet */}
        <p className="font-bold text-left">Internet:</p>
        <p className="text-left">www.ayhankublay.de</p>

        {/* Steuer-Nr */}
        <p className="font-bold text-left">Steuer-Nr:</p>
        <p className="text-left">DE368974506</p>

        {/* Finanzamt */}
        <p className="font-bold text-left">Finanzamt:</p>
        <p className="text-left">Schwabmünchen</p>

       
      </div>
    </div>
  );
};

export default Impressum;
