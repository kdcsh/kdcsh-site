  //JSON with doctors info
  const doctorsData = [{
          "fullName": "Андріянова Олена Віталіївна",
          "speciality": "Стоматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "206"
      },
      {
          "fullName": "Антонова Валентина Миколаївна",
          "speciality": "Інфекціоніст",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "127"
      },
      {
          "fullName": "Бабій Валентина Іванівна",
          "speciality": "Кардіоревматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "309"
      },
      {
          "fullName": "Бабій Валентина Іванівна",
          "speciality": "Фізіотерапевт",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "309"
      },
      {
          "fullName": "Барабаш Людмила Миколаївна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "108 (корпус А)"
      },
      {
          "fullName": "Белла Вікторія Вікторівна",
          "speciality": "Гастроентеролог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "525"
      },
      {
          "fullName": "Белла Олег Геннадійович",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "431"
      },
      {
          "fullName": "Білан Надія Федорівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "10"
      },
      {
          "fullName": "Бобиляк Олег Романович",
          "speciality": "Хірург-онколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "705"
      },
      {
          "fullName": "Боднар Іван Сергійович",
          "speciality": "Невролог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "416"
      },
      {
          "fullName": "Большакова Ірина Анатоліївна",
          "speciality": "Алерголог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "220"
      },
      {
          "fullName": "Большакова Ірина Анатоліївна",
          "speciality": "Алерголог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "207"
      },
      {
          "fullName": "Борис Наталія Валеріївна",
          "speciality": "Отоларинголог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "311"
      },
      {
          "fullName": "Бурлака Лариса Едуардівна",
          "speciality": "Ендокринолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "107"
      },
      {
          "fullName": "Бурчинська Наталія Василівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "510"
      },
      {
          "fullName": "Бучинський Сергій Никодимович",
          "speciality": "Фізична та реабілітаційна медицина",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "330"
      },
      {
          "fullName": "Возненко Юлія Анатоліївна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "404"
      },
      {
          "fullName": "Войдевич Наталя Леонідівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "240"
      },
      {
          "fullName": "Войдевич Юрій Валентинович",
          "speciality": "Ортопед-травматолог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "230"
      },
      {
          "fullName": "Волох Олександр Дмитрович",
          "speciality": "Уролог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "311"
      },
      {
          "fullName": "Гавронська Олександра Миколаївна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "225"
      },
      {
          "fullName": "Гайдуков Олег В'ячеславович",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "536"
      },
      {
          "fullName": "Гайдукова Зоя Миколаївна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "202"
      },
      {
          "fullName": "Гальченко Зоя Олексіївна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "217"
      },
      {
          "fullName": "Гнатюк Олена Андріївна",
          "speciality": "Дерматовенеролог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "2"
      },
      {
          "fullName": "Гончарук Володимир Анатолійович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "309"
      },
      {
          "fullName": "Григорів Галина Михайлівна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "218"
      },
      {
          "fullName": "Григорів Оксана Богданівна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "218"
      },
      {
          "fullName": "Гриша Олена Олександрівна",
          "speciality": "Дерматовенеролог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "1"
      },
      {
          "fullName": "Грищенко Ася Вікторівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "510"
      },
      {
          "fullName": "Гуменюк Олена Володимирівна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "511"
      },
      {
          "fullName": "Дабіжа Ольга Іванівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "409"
      },
      {
          "fullName": "Даниленко Ольга Володимирівна",
          "speciality": "Ендокринолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "409"
      },
      {
          "fullName": "Делієргієв Ігор Михайлович",
          "speciality": "Практичний психолог",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "106"
      },
      {
          "fullName": "Джигун Ігор Олександрович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "302"
      },
      {
          "fullName": "Джур Юлія Михайлівна",
          "speciality": "Ендокринолог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "322"
      },
      {
          "fullName": "Дзюба Віра Василівна",
          "speciality": "Логопед",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "203"
      },
      {
          "fullName": "Дмитренко Ірина Анатоліївна",
          "speciality": "Кардіоревматолог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "19"
      },
      {
          "fullName": "Домбровська Світлана Вікторівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "229"
      },
      {
          "fullName": "Донченко Віктор Васильович",
          "speciality": "Стоматолог-хірург",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "405"
      },
      {
          "fullName": "Дорошенко Зінаїда Миколаївна",
          "speciality": "Отоларинголог дитячий",
          "address": "місто Київ, вул. Ольжича, 16",
          "cabinet": "18"
      },
      {
          "fullName": "Дударенко Тетяна Анатоліївна",
          "speciality": "Пульмонолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "521"
      },
      {
          "fullName": "Дученко Тетяна Федорівна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "530"
      },
      {
          "fullName": "Ємець Наталія Валеріївна",
          "speciality": "Кардіоревматолог дитячий",
          "address": "місто Київ, вул. Ольжича, 16",
          "cabinet": "36"
      },
      {
          "fullName": "Єрмоленко Наталія Станіславівна",
          "speciality": "Невролог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "302"
      },
      {
          "fullName": "Єрмольєва Людмила Григорівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "корпус А, каб.115"
      },
      {
          "fullName": "Жданова Марина Валеріївна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "417А"
      },
      {
          "fullName": "Жигалова Олена Василівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "404"
      },
      {
          "fullName": "Забіяка Людмила Климентіївна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "417 Б"
      },
      {
          "fullName": "Загайний Сергій Володимирович",
          "speciality": "Отоларинголог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "706"
      },
      {
          "fullName": "Загородня Світлана Іванівна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "532"
      },
      {
          "fullName": "Збанацька Наталія Василівна",
          "speciality": "Лікар з лікувальної фізкультури",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "201"
      },
      {
          "fullName": "Ізваріна Алла Андріївна",
          "speciality": "Дерматовенеролог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "333"
      },
      {
          "fullName": "Казанський Вячеслав Сергійович",
          "speciality": "Уролог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "704"
      },
      {
          "fullName": "Каплун Андрій Миколайович",
          "speciality": "Уролог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "235"
      },
      {
          "fullName": "Карасьова Наталія Яківна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "121"
      },
      {
          "fullName": "Квашук Антоніна Володимирівна",
          "speciality": "Невролог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "22"
      },
      {
          "fullName": "Кий Вікторія Євгеніївна",
          "speciality": "Отоларинголог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "7"
      },
      {
          "fullName": "Киричок Євгеній Вікторович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "236"
      },
      {
          "fullName": "Клюєва Вікторія Іллівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "323"
      },
      {
          "fullName": "Клюєва Вікторія Іллівна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "334"
      },
      {
          "fullName": "Кобзій Тамара Іванівна",
          "speciality": "Стоматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "207"
      },
      {
          "fullName": "Коваленко Галина Василівна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "324"
      },
      {
          "fullName": "Козакова Інна Анатоліївна",
          "speciality": "Інфекціоніст",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "203"
      },
      {
          "fullName": "Козлов Денис Валерійович",
          "speciality": "Уролог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "704"
      },
      {
          "fullName": "Козловська Наталя Василівна",
          "speciality": "Функціональна діагностика",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "10"
      },
      {
          "fullName": "Козловська Наталя Василівна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "10"
      },
      {
          "fullName": "Колонтаєв Юрій Вячеславович",
          "speciality": "Дерматовенеролог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "225"
      },
      {
          "fullName": "Коржик Наталія Петрівна",
          "speciality": "Хірург",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "236"
      },
      {
          "fullName": "Коропецька Олена Юріївна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "401"
      },
      {
          "fullName": "Коропецький Володимир Васильович",
          "speciality": "Стоматолог-хірург",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "407"
      },
      {
          "fullName": "Кошовий Артем Вікторович",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "333"
      },
      {
          "fullName": "Кошовий Артем Вікторович",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "334"
      },
      {
          "fullName": "Крива Світлана Ігорівна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "327"
      },
      {
          "fullName": "Кужель Оксана Віталіївна",
          "speciality": "Отоларинголог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "231"
      },
      {
          "fullName": "Куліш Ольга Олексіївна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "532"
      },
      {
          "fullName": "Куценко Інна Василівна",
          "speciality": "Ендокринолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "409"
      },
      {
          "fullName": "Куць Зінаїда Миколаївна",
          "speciality": "Кардіоревматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "304"
      },
      {
          "fullName": "Лаврук Яна Петрівна",
          "speciality": "Стоматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "103"
      },
      {
          "fullName": "Лазарєва Юлія Анатоліївна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "228"
      },
      {
          "fullName": "Лебедєва Катерина Олегівна",
          "speciality": "Хірург",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "214"
      },
      {
          "fullName": "Левченко Наталія Петрівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "227"
      },
      {
          "fullName": "Лєщова Наталія Георгіївна",
          "speciality": "Ревматолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "526"
      },
      {
          "fullName": "Лисенко Олена Адамівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "510"
      },
      {
          "fullName": "Лісняк Світлана Леонідівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "406"
      },
      {
          "fullName": "Лозян Наталія Віталіївна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "202"
      },
      {
          "fullName": "Лопатнюк Юлія Олександрівна",
          "speciality": "Отоларинголог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "213"
      },
      {
          "fullName": "Лунгор Неля Леонідівна",
          "speciality": "Ендокринолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "523"
      },
      {
          "fullName": "Лунгор Неля Леонідівна",
          "speciality": "Ендокринолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "304"
      },
      {
          "fullName": "Луцишин Ярина Богданівна",
          "speciality": "Терапевт",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "9"
      },
      {
          "fullName": "Людкевич Валентина Григорівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "232"
      },
      {
          "fullName": "Максимов Вадим Валерійович",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "536"
      },
      {
          "fullName": "Малаханова Юлія Юріївна",
          "speciality": "Фізична та реабілітаційна медицина",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "341"
      },
      {
          "fullName": "Малевська Оксана Олександрівна",
          "speciality": "Терапевт",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "506"
      },
      {
          "fullName": "Маліновська Тетяна Юріївна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "232"
      },
      {
          "fullName": "Мар'янчик Наталія Анатоліївна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "107"
      },
      {
          "fullName": "Мартинюк Андрій Анатолійович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "301"
      },
      {
          "fullName": "Мастій Олена Вікторівна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "202"
      },
      {
          "fullName": "Мастій Олена Вікторівна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "415"
      },
      {
          "fullName": "Матвєєв Володимир Володимирович",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "410"
      },
      {
          "fullName": "Матвієнко Леся Анатоліївна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "403"
      },
      {
          "fullName": "Мельник Леонід Миколайович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "309"
      },
      {
          "fullName": "Миронюк Володимир Степанович",
          "speciality": "Стоматолог-хірург",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "414"
      },
      {
          "fullName": "Мишко Андрій Степанович",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "230"
      },
      {
          "fullName": "Мірошник Галина Петрівна",
          "speciality": "Логопед",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "215"
      },
      {
          "fullName": "Можарівська Ольга Михайлівна",
          "speciality": "Інфекціоніст",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "228"
      },
      {
          "fullName": "Новіцька Людмила Миколаївна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "216"
      },
      {
          "fullName": "Озимай Олена Віталіївна",
          "speciality": "Отоларинголог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "332"
      },
      {
          "fullName": "Омельчук Наталія Володимирівна",
          "speciality": "Фізична та реабілітаційна медицина",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "341"
      },
      {
          "fullName": "Онашко Олена Євгенівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "401"
      },
      {
          "fullName": "Остроушко Ірина Володимирівна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "5"
      },
      {
          "fullName": "П'ятниця Наталія Миколаївна",
          "speciality": "Ендокринолог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "201"
      },
      {
          "fullName": "Паламарчук Алла Юріївна",
          "speciality": "Стоматолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "401"
      },
      {
          "fullName": "Паршиков Юрій Олександрович",
          "speciality": "Ортопед-травматолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "305"
      },
      {
          "fullName": "Пашкевич Олена Володимирівна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "406"
      },
      {
          "fullName": "Петренко Оксана Іванівна",
          "speciality": "Фізична та реабілітаційна медицина",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "401"
      },
      {
          "fullName": "Петрик Олена Сергіївна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "413"
      },
      {
          "fullName": "Петришина Юлія Геннадіївна",
          "speciality": "Стоматолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "403"
      },
      {
          "fullName": "Петрова Олена Анатоліїївна",
          "speciality": "Отоларинголог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "48"
      },
      {
          "fullName": "Півоваров Андрій Русланович",
          "speciality": "Ортопед-травматолог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "308"
      },
      {
          "fullName": "Поволоцька Тетяна Володимирівна",
          "speciality": "Гастроентеролог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "419"
      },
      {
          "fullName": "Поліщук Ніна Михайлівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "227"
      },
      {
          "fullName": "Полодюк Оксана Володимирівна",
          "speciality": "Стоматолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "404"
      },
      {
          "fullName": "Пономаренко Валерій Андрійович",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "225"
      },
      {
          "fullName": "Потапенко Любов Михайлівна",
          "speciality": "Стоматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "203"
      },
      {
          "fullName": "Пранова Ольга Володимирівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "225"
      },
      {
          "fullName": "Пранова Ольга Володимирівна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "225"
      },
      {
          "fullName": "Примак Олександр Іванович",
          "speciality": "Стоматолог-хірург",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "405"
      },
      {
          "fullName": "Прокопчук Олексій Анатолійович",
          "speciality": "Гастроентеролог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "525а"
      },
      {
          "fullName": "Процюк Олександр Віталійович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "306"
      },
      {
          "fullName": "Розумна Олена Борисівна",
          "speciality": "Невролог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "302"
      },
      {
          "fullName": "Романюк Любов Олександрівна",
          "speciality": "Стоматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "206"
      },
      {
          "fullName": "Рубейкін Олександр Петрович",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "238"
      },
      {
          "fullName": "Савінська Наталія Борисівна",
          "speciality": "Функціональна діагностика",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "420"
      },
      {
          "fullName": "Секер Тетяна Михайлівна",
          "speciality": "Невролог дитячий",
          "address": "місто Київ, вул. Ольжича, 16",
          "cabinet": "49"
      },
      {
          "fullName": "Семенюк Ніна Володимирівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "404"
      },
      {
          "fullName": "Семенюк Олена Петрівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "227"
      },
      {
          "fullName": "Сербіненко Віталій Григорович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "716"
      },
      {
          "fullName": "Сидоренко Інна Володимирівна",
          "speciality": "Фізична та реабілітаційна медицина",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "324"
      },
      {
          "fullName": "Синенко Юлія Віталіївна",
          "speciality": "Педіатр",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "306"
      },
      {
          "fullName": "Синицька Олена Іванівна",
          "speciality": "Дерматовенеролог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "223"
      },
      {
          "fullName": "Сікачов Борис Анатолійович",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "720"
      },
      {
          "fullName": "Сікачова Ірина Сергіївна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "223"
      },
      {
          "fullName": "Скрипка Анжела Іванівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "226"
      },
      {
          "fullName": "Славінська Валентина Василівна",
          "speciality": "Стоматолог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "203"
      },
      {
          "fullName": "Снігова Ірина Ігорівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "406"
      },
      {
          "fullName": "Сопічева Ірина Анатоліївна",
          "speciality": "Функціональна діагностика",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "16"
      },
      {
          "fullName": "Сорокун Наталія Василівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "319"
      },
      {
          "fullName": "Стадник Лілія Михайлівна",
          "speciality": "Дерматовенеролог дитячий",
          "address": "місто Київ, вул. Ольжича, 16",
          "cabinet": "46"
      },
      {
          "fullName": "Стеценко Надія Василівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "319"
      },
      {
          "fullName": "Талько Максим Олександрович",
          "speciality": "Хірург дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "11"
      },
      {
          "fullName": "Тілльс Юлія Юріївна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "506"
      },
      {
          "fullName": "Ткаченко Вадим Вікторович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "305"
      },
      {
          "fullName": "Ткачук Вадим Вікторович",
          "speciality": "Педіатр",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "3"
      },
      {
          "fullName": "Ткачук Вадим Вікторович",
          "speciality": "Інфекціоніст дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "3 ; 1 поверх"
      },
      {
          "fullName": "Трачук Тетяна Миколаївна",
          "speciality": "Інфекціоніст",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "520"
      },
      {
          "fullName": "Трегубенко Ольга Вікторівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "506"
      },
      {
          "fullName": "Трокай Юлія Олексіївна",
          "speciality": "Отоларинголог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "329"
      },
      {
          "fullName": "Тхоржевська Марина Степанівна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "222"
      },
      {
          "fullName": "Ульянченко Леся Павлівна",
          "speciality": "Терапевт",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "513"
      },
      {
          "fullName": "Федоришин Тарас Петрович",
          "speciality": "Стоматолог-хірург",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "324"
      },
      {
          "fullName": "Федорова Ольга Євгеніївна",
          "speciality": "Гастроентеролог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "21"
      },
      {
          "fullName": "Федуліна Інна Вікторівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "231"
      },
      {
          "fullName": "Филипчук Наталія Миколаївна",
          "speciality": "Ендокринолог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "17"
      },
      {
          "fullName": "Франковська Марія Петрівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "228"
      },
      {
          "fullName": "Хацько Лілія Олександрівна",
          "speciality": "Функціональна діагностика",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "202"
      },
      {
          "fullName": "Чамлай Андрій Васильович",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "401"
      },
      {
          "fullName": "Чеченєв Ігор Олександрович",
          "speciality": "Ортопед-травматолог",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "229"
      },
      {
          "fullName": "Чечотенко Ігор Вікторович",
          "speciality": "Уролог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "507"
      },
      {
          "fullName": "Чумак Олександр Анатолійович",
          "speciality": "Уролог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "312"
      },
      {
          "fullName": "Чурюмова Тетяна Іванівна",
          "speciality": "Невролог",
          "address": "місто Київ вул. Ризька 1",
          "cabinet": "214"
      },
      {
          "fullName": "Шарупіч Юлія Павлівна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "522"
      },
      {
          "fullName": "Шаталова Марина Віталіївна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "16"
      },
      {
          "fullName": "Шаталова Марина Віталіївна",
          "speciality": "Гінеколог дитячий",
          "address": "місто Київ вул. Салютна 23А",
          "cabinet": "10"
      },
      {
          "fullName": "Швець Жанна Павлівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "--"
      },
      {
          "fullName": "Швець Ольга Володимирівна",
          "speciality": "Кардіолог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "402"
      },
      {
          "fullName": "Шерегій Наталія Володимирівна",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "413"
      },
      {
          "fullName": "Шереметьєва Анна Андріївна",
          "speciality": "Отоларинголог дитячий",
          "address": "місто Київ вул. Петлюри 2/4",
          "cabinet": "303"
      },
      {
          "fullName": "Шугайлюк Олена Валеріївна",
          "speciality": "Ендокринолог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "407"
      },
      {
          "fullName": "Шульжинський Костянтин Олександрович",
          "speciality": "Ортопед-травматолог",
          "address": "місто Київ вул. Саксаганського 100",
          "cabinet": "718"
      },
      {
          "fullName": "Шумейко Андрій Олександрович",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "324"
      },
      {
          "fullName": "Шумейко Антон Олександрович",
          "speciality": "Стоматолог-терапевт",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "512"
      },
      {
          "fullName": "Ягер Іван Іванович",
          "speciality": "Хірург",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "211"
      },
      {
          "fullName": "Яковенко Леся Петрівна",
          "speciality": "Акушер-гінеколог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "332"
      },
      {
          "fullName": "Ямчицька Юлія Олексіївна",
          "speciality": "Офтальмолог",
          "address": "місто Київ вул. Хмельницького Богдана 37",
          "cabinet": "403"
      },
      {
          "fullName": "Ярая Вікторія Петрівна",
          "speciality": "Лікар з ультразвукової діагностики",
          "address": "місто Київ вул. Пимоненка Миколи 10",
          "cabinet": "корп. А, каб. 11"
      },
      {
          "fullName": "Яцишина Мирослава Анатоліївна",
          "speciality": "Онколог",
          "address": "місто Київ вул. Щербаківського Данила 70",
          "cabinet": "310"
      }
  ]


  // IMPORT SCRIPT 
  document.addEventListener("DOMContentLoaded", function () {
      const container = document.getElementById('paginated-list');

      // Iterate through each object from the data array
      doctorsData.forEach(doctor => {
          // Create HTML elements
          const listItem = document.createElement('div');
          listItem.classList.add('list-item');

          const img = document.createElement('img');
          img.src = 'src/doctor.svg';
          img.alt = 'Doctor Icon';
          img.width = 100;
          img.height = 100;

          const fullName = document.createElement('p');
          fullName.textContent = doctor.fullName;

          const speciality = document.createElement('strong');
          speciality.textContent = doctor.speciality;

          const addressCabinet = document.createElement('p');
          addressCabinet.textContent = `${doctor.address}, кабінет ${doctor.cabinet}`;

          // Add the created elements to the parent element
          listItem.appendChild(img);
          listItem.appendChild(fullName);
          listItem.appendChild(speciality);
          listItem.appendChild(addressCabinet);

          container.appendChild(listItem); // Add the created elements to the page
      });
      const script = document.createElement('script');
      script.src = 'pagination.js';
      document.body.appendChild(script);
  });