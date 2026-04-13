const stores = [
  /* ===== LUNES – F8X-899 – SUR COSTA ===== */
  {
    nombre: "PLAZA VEA MIRAFLORES",
    codigos: "6240312/6245307",
    lat: -12.112264,
    lng: -77.029972,
    dia: "LUNES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO MIRAFLORES - SHELL",
    codigos: "6240362/6245198",
    lat: -12.122594,
    lng: -77.029846,
    dia: "LUNES",
    camion: "F8X-899"
  },
  {
    nombre: "WONG BAJADA BALTA",
    codigos: "6241949/6245215",
    lat: -12.122811,
    lng: -77.032052,
    dia: "LUNES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO BARRANCO",
    codigos: "6240354/6245199",
    lat: -12.146251,
    lng: -77.021723,
    dia: "LUNES",
    camion: "F8X-899"
  },
  {
    nombre: "MAKRO CHORRILLOS (HUAYLAS)",
    codigos: "6247651/6247643",
    lat: -12.174321,
    lng: -77.019302,
    dia: "LUNES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO CHORRILLOS",
    codigos: "6245178/6240486",
    lat: -12.170642,
    lng: -77.012518,
    dia: "LUNES",
    camion: "F8X-899"
  },

  /* ===== MARTES – F8X-899 – SUR INTERIOR ===== */
  {
    nombre: "PLAZA VEA ALAMEDA SUR",
    codigos: "6245262/6240491",
    lat: -12.196812,
    lng: -77.011472,
    dia: "MARTES",
    camion: "F8X-899"
  },
  {
    nombre: "PLAZA VEA GUARDIA CIVIL",
    codigos: "6245362/6241596",
    lat: -12.17197,
    lng: -76.992196,
    dia: "MARTES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO SAN JUAN DE MIRAFLORES",
    codigos: "6249305/6249297",
    lat: -12.160544,
    lng: -76.978288,
    dia: "MARTES",
    camion: "F8X-899"
  },
  {
    nombre: "PLAZA VEA LA CURVA",
    codigos: "6245480/6244271",
    lat: -12.180293,
    lng: -76.943061,
    dia: "MARTES",
    camion: "F8X-899"
  },

  /* ===== MIERCOLES – F8X-899 – ZONA CENTRO ===== */
  {
    nombre: "PLAZA VEA ALCAZAR",
    codigos: "6245248/6242247",
    lat: -12.029268,
    lng: -77.031081,
    dia: "MIERCOLES",
    camion: "F8X-899"
  },
  {
    nombre: "PLAZA VEA ALFONSO UGARTE",
    codigos: "6245214/6240297",
    lat: -12.053479,
    lng: -77.041911,
    dia: "MIERCOLES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO BREÑA",
    codigos: "6240375/6245179",
    lat: -12.054307,
    lng: -77.042429,
    dia: "MIERCOLES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO JESUS MARIA (GARZON)",
    codigos: "6245194/6240372",
    lat: -12.073768,
    lng: -77.050969,
    dia: "MIERCOLES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO LINCE",
    codigos: "6245187/6240367",
    lat: -12.04878,
    lng: -77.03188,
    dia: "MIERCOLES",
    camion: "F8X-899"
  },

  /* ===== JUEVES – F8X-899 – CENTRO 2 ===== */
  {
    nombre: "PLAZA VEA SAN ISIDRO",
    codigos: "6245344/6243095",
    lat: -12.097301,
    lng: -77.026081,
    dia: "JUEVES",
    camion: "F8X-899"
  },
  {
    nombre: "VIVANDA DOS DE MAYO",
    codigos: "6245285/6240487",
    lat: -12.092159,
    lng: -77.045632,
    dia: "JUEVES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO SAN MIGUEL",
    codigos: "6240291/6248758",
    lat: -12.077039,
    lng: -77.083667,
    dia: "JUEVES",
    camion: "F8X-899"
  },
  {
    nombre: "PLAZA VEA PUEBLO LIBRE",
    codigos: "6245214/6240297",
    lat: -12.053479,
    lng: -77.041911,
    dia: "JUEVES",
    camion: "F8X-899"
  },

  /* ===== VIERNES – F8X-899 – REFUERZO ===== */
  {
    nombre: "WONG BENAVIDES",
    codigos: "6245455/6240345",
    lat: -12.126047,
    lng: -77.017705,
    dia: "VIERNES",
    camion: "F8X-899"
  },
  {
    nombre: "PLAZA VEA LA MOLINA",
    codigos: "6245310/6240305",
    lat: -12.0907,
    lng: -76.9507,
    dia: "VIERNES",
    camion: "F8X-899"
  },
  {
    nombre: "METRO MARINA",
    codigos: "6245182/6240374",
    lat: -12.077654,
    lng: -77.090583,
    dia: "VIERNES",
    camion: "F8X-899"
  },
  /* ===== LUNES – F1G-866 – NORTE 1 ===== */
  {
    nombre: "METRO INDEPENDENCIA",
    codigos: "6245208/6240485",
    lat: -11.987407,
    lng: -77.064203,
    dia: "LUNES",
    camion: "F1G-866"
  },
  {
    nombre: "PLAZA VEA IZAGUIRRE",
    codigos: "6245180/6240282",
    lat: -12.049088,
    lng: -77.035561,
    dia: "LUNES",
    camion: "F1G-866"
  },
  {
    nombre: "PLAZA VEA LOS OLIVOS",
    codigos: "6245313/6240301",
    lat: -11.993841,
    lng: -77.072621,
    dia: "LUNES",
    camion: "F1G-866"
  },
  {
    nombre: "METRO PLAZA NORTE",
    codigos: "6245169/6240331",
    lat: -12.006155,
    lng: -77.060852,
    dia: "LUNES",
    camion: "F1G-866"
  },
  /* ===== MARTES – F1G-866 – NORTE 2 ===== */
  {
    nombre: "PLAZA VEA PUENTE PIEDRA",
    codigos: "6245217/6240280",
    lat: -11.864227,
    lng: -77.0733,
    dia: "MARTES",
    camion: "F1G-866"
  },
  {
    nombre: "PLAZA VEA VENTANILLA",
    codigos: "6245351/6243137",
    lat: -11.872437,
    lng: -77.126916,
    dia: "MARTES",
    camion: "F1G-866"
  },
  {
    nombre: "TOTTUS PUENTE PIEDRA",
    codigos: "6245365/6240426",
    lat: -11.99779,
    lng: -76.921479,
    dia: "MARTES",
    camion: "F1G-866"
  },
  /* ===== MIERCOLES – F1G-866 – ESTE 1 ===== */
  {
    nombre: "PLAZA VEA PURUCHUCO",
    codigos: "6245442/6245111",
    lat: -12.0396155,
    lng: -76.9325282,
    dia: "MIERCOLES",
    camion: "F1G-866"
  },
  {
    nombre: "WONG ATE",
    codigos: "6245465/6240314",
    lat: -12.059361,
    lng: -76.962773,
    dia: "MIERCOLES",
    camion: "F1G-866"
  },
  {
    nombre: "PLAZA VEA STA. CLARA",
    codigos: "6245229/6240278",
    lat: -12.0135167,
    lng: -76.8851442,
    dia: "MIERCOLES",
    camion: "F1G-866"
  },
  /* ===== JUEVES – F1G-866 – ESTE 2 ===== */
  {
    nombre: "PLAZA VEA LA MOLINA",
    codigos: "6245310/6240305",
    lat: -12.0907,
    lng: -76.9507,
    dia: "JUEVES",
    camion: "F1G-866"
  },
  {
    nombre: "WONG CAMACHO",
    codigos: "6245462/6240336",
    lat: -12.080493,
    lng: -76.966998,
    dia: "JUEVES",
    camion: "F1G-866"
  },
  {
    nombre: "PLAZA VEA SAN JUAN DE LURIGANCHO",
    codigos: "6245230/6240277",
    lat: -11.933719,
    lng: -76.689092,
    dia: "JUEVES",
    camion: "F1G-866"
  },
  {
    nombre: "METRO SAN JUAN DE LURIGANCHO",
    codigos: "6245183/6240366",
    lat: -12.007111,
    lng: -77.004826,
    dia: "JUEVES",
    camion: "F1G-866"
  },
  /* ===== VIERNES – F1G-866 – RUTAS LARGAS / REFUERZO ===== */
  {
    nombre: "PLAZA VEA CHOSICA",
    codigos: "6245274/6240905",
    lat: -11.940355,
    lng: -76.699793,
    dia: "VIERNES",
    camion: "F1G-866"
  },
  {
    nombre: "PLAZA VEA STA. CLARA",
    codigos: "6245229/6240278",
    lat: -12.0135167,
    lng: -76.8851442,
    dia: "VIERNES",
    camion: "F1G-866"
  },
  {
    nombre: "TOTTUS ATOCONGO",
    codigos: "6245257/6240477",
    lat: -11.99779,
    lng: -76.921479,
    dia: "VIERNES",
    camion: "F1G-866"
  }
];
