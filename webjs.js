// Importing modules------------------------------------------------------------------------------------------------

const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
var axios = require("axios");
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome",
  },
});

// Getting fleet Monitoring Data From SCM-APML------------------------------------------------------------------------
var config = {
  method: "get",
  url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
  },
};

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

const { Console } = require("console");
client.on("ready", () => {
  // console.log("Client is ready!");

  // console.log(new Date().getHours());

  //Start here-Reporting alert

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 15 && date.getMinutes() === 05) {
      // Check the time
      const player = require("node-wav-player");
      player
        .play({
          path: "trl.wav",
        })
        .then(() => {
          // console.log("The wav file started to be played successfully.");
        })
        .catch((error) => {
          console.error(error);
        });
      client.sendMessage(
        "919321704394-1480771870@g.us",
        "APML Control Room Alert \n *TRAILER Team get ready for review in 5 mins* \n 3:10 pm to 3:30pm"
      );
    }

    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 15 && date.getMinutes() === 45) {
      // Check the time
      const player = require("node-wav-player");
      player
        .play({
          path: "sxl.wav",
        })
        .then(() => {
          // console.log("The wav file started to be played successfully.");
        })
        .catch((error) => {
          console.error(error);
        });
      client.sendMessage(
        "919321704394-1480771870@g.us",
        "APML Control Room Alert \n *SXL Team get ready for review in 5 mins* \n 3:50 pm to 4:10pm"
      );
    }
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 16 && date.getMinutes() === 25) {
      // Check the time
      const player = require("node-wav-player");
      player
        .play({
          path: "calldesk.wav",
        })
        .then(() => {
          // console.log("The wav file started to be played successfully.");
        })
        .catch((error) => {
          console.error(error);
        });
      client.sendMessage(
        "919321704394-1480771870@g.us",
        "APML Control Room Alert \n *CALL DESK Team get ready for review in 5 mins* \n 4:30 pm to 5:00pm"
      );
    }

    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 16 && date.getMinutes() === 55) {
      // Check the time
      const player = require("node-wav-player");
      player
        .play({
          path: "jkeicher.wav",
        })
        .then(() => {
          // console.log("The wav file started to be played successfully.");
        })
        .catch((error) => {
          console.error(error);
        });
      client.sendMessage(
        "919321704394-1480771870@g.us",
        "APML Control Room Alert \n *EICHER & JK Team get ready for review in 5 mins* \n 5:00 pm to 5:20pm"
      );
    }
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 17 && date.getMinutes() === 10) {
      // Check the time
      const player = require("node-wav-player");
      player
        .play({
          path: "mxl.wav",
        })
        .then(() => {
          // console.log("The wav file started to be played successfully.");
        })
        .catch((error) => {
          console.error(error);
        });
      client.sendMessage(
        "919321704394-1480771870@g.us",
        "APML Control Room Alert \n *MXL Team get ready for review in 5 mins* \n 5:20 pm to 5:40pm"
      );
    }

    if (date.getHours() === 10 && date.getMinutes() === 00) {
      // Check the time
      const player = require("node-wav-player");
      player
        .play({
          path: "itnishakti.wav",
        })
        .then(() => {
          // console.log("The wav file started to be played successfully.");
        })
        .catch((error) => {
          console.error(error);
        });
      client.sendMessage(
        "919321704394-1480771870@g.us",
        " \n *APML Prayer has Started* "
      );
    }
  }, 60000);

  //end hereReporting alert------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------------------
  //Start here-MXL Report 2pm-4pm-7pm(daily)

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (
      (date.getHours() === 14 && date.getMinutes() === 00) ||
      (date.getHours() === 16 && date.getMinutes() === 18) ||
      (date.getHours() === 19 && date.getMinutes() === 02)
    ) {
      // Check the time

      var config = {
        method: "get",
        url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      //Global Variable created
      var data1 = [];
      var data2 = [];
      var data = [];
      var data5 = [];
      var data3 = [];
      var data6 = [];
      var data18 = [];
      const count = {};
      const avg = {};
      const avgof = {};
      const avgmai = {};
      const avgsdays = {};
      const count1 = {};
      const count2 = {};

      axios(config).then(function (response) {
        var datamain = response.data.data.records["NO GROUPING"];

        console.log(datamain)
        var sum = [];
        var sumoffduty = [];
        var sumofmait = [];
        for (var i = 0; i < datamain.length; i++) {
          var cq = datamain[i].vehicle.customFields.filter((x) => x.value);

          if (kbd(cq).includes("LINE_MXL")) {
            data1 = datamain[i].status;
            data.push(data1);

            if (
              datamain[i].status == "Available" ||
              datamain[i].status == "At delivery"
            ) {
              data2.push(datamain[i].currentHub);
              data18.push(datamain[i].currentTripPoint?.actualArrival);
              sum.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint?.actualArrival,
              ]);
            }

            if (datamain[i].status == "OffDuty") {
              data3.push(datamain[i].currentHub);
              sumoffduty.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }

            if (datamain[i].status == "Maintenance") {
              data5.push(datamain[i].currentHub);
              sumofmait.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }
          }
        }

        console.log(sum,"HELLO DATA!*")

        for (const element of data2) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        for (const element1 of sum) {
          if (avg[element1[0]]) {
            avg[element1[0]] += Number(element1[1]);
          } else {
            avg[element1[0]] = Number(element1[1]);
          }
        }
        function GetFullName1(_a) {
          var countFrom = new Date(_a);
          now = new Date();
          b = new Date(countFrom);
          distance = now.getTime() - b.getTime();

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(distance / secondsInADay);

          let xyz = days;

          return xyz.toFixed(0) + "d";
        }

        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        // avgsdays=sum11(avg, count)

        if (String(data.filter((x) => x == "Empty Run").length) == 0) {
          var odd = "";
        } else {
          var odd =
            "\n 🔘 EMPTY RUN: *" +
            String(data.filter((x) => x == "Empty Run").length) +
            "*";
        }

        // console.log(odd);

        if (String(data.filter((x) => x == "Available").length) == 0) {
          var empty = "";
        } else {
          var empty =
            " 🔴 EMPTY: *" +
            String(data.filter((x) => x == "Available").length) +
            "*";
        }
        // console.log(empty);
        if (String(data.filter((x) => x == "At delivery").length) == 0) {
          var unlp = "";
        } else {
          var unlp =
            "\n 🟣 UNLOADING POINT: *" +
            String(data.filter((x) => x == "At delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Maintenance").length) == 0) {
          var maintnc = "";
        } else {
          var maintnc =
            "\n 👨🏽‍🔧 MAINTENANCE: *" +
            String(data.filter((x) => x == "Maintenance").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Enroute for pickup").length) == 0) {
          var enrpickup = "";
        } else {
          var enrpickup =
            "\n 🟤 ONWAY TO LOADING POINT: *" +
            String(data.filter((x) => x == "Enroute for pickup").length) +
            "*";
        }

        if (String(data.filter((x) => x == "At pickup").length) == 0) {
          var loadingpoint = "";
        } else {
          var loadingpoint =
            "\n 🟡 LOADING POINT: *" +
            String(data.filter((x) => x == "At pickup").length) +
            "*";
        }

        if (
          String(data.filter((x) => x == "Enroute for delivery").length) == 0
        ) {
          var intransit = "";
        } else {
          var intransit =
            "\n 🟢 IN TRANSIT: *" +
            String(data.filter((x) => x == "Enroute for delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "OffDuty").length) == 0) {
          var offd = "";
        } else {
          var offd =
            "\n 🟠 OffDuty: *" +
            String(data.filter((x) => x == "OffDuty").length) +
            "*";
        }
        var dat =
          "*MXL TOTAL*:-" +
          " *" +
          String(data.length) +
          "* " +
          "\n-----------------------\n" +
          empty +
          unlp +
          maintnc +
          enrpickup +
          odd +
          loadingpoint +
          intransit +
          offd;

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(([key]) =>
            key.includes("APML")
          )
        );

        let entries = Object.entries(val);
        var dtt = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt =
            dtt +
            "\n" +
            String(entries[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt == "") {
          dtt = "";
        } else {
          dtt =
            "\n-------------------\n⚠️ *MT & UNLP* ⚠️\n----------------------\n            *Hub location* " +
            dtt;
        }

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(
            ([key]) => !key.includes("APML")
          )
        );
        console.log
        let entries2 = Object.entries(val);
        var dtt1 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt1 =
            dtt1 +
            "\n" +
            String(entries2[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        // console.log(dtt1, "xc");

        if (dtt1 == "") {
          dtt1 = "";
        } else {
          dtt1 =
            "\n------------------------\n          *Odd location*\n" + dtt1;
        }

        for (const element of data3) {
          if (count1[element]) {
            count1[element] += 1;
          } else {
            count1[element] = 1;
          }
        }

        for (const element1 of sumoffduty) {
          if (avgof[element1[0]]) {
            avgof[element1[0]] += Number(element1[1]);
          } else {
            avgof[element1[0]] = Number(element1[1]);
          }
        }
        // console.log(sumoffduty, "YEH HAI OFF DUTY KA");
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgof, count1)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries3 = Object.entries(val);
        var dtt4 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt4 =
            dtt4 +
            "\n" +
            String(entries3[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt4 == "") {
          dtt4 = "";
        } else {
          dtt4 =
            "\n---------------------------\n🚷  *Off Duty* 🚷 \n-------------------------" +
            dtt4;
        }

        for (const element of data5) {
          if (count2[element]) {
            count2[element] += 1;
          } else {
            count2[element] = 1;
          }
        }
        for (const element1 of sumofmait) {
          if (avgmai[element1[0]]) {
            avgmai[element1[0]] += Number(element1[1]);
          } else {
            avgmai[element1[0]] = Number(element1[1]);
          }
        }
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgmai, count2)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries4 = Object.entries(val);
        var dtt8 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt8 =
            dtt8 +
            "\n" +
            String(entries4[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }
        if (dtt8 == "") {
          dtt8 = "";
        } else {
          dtt8 =
            "\n--------------------------\n👨🏽‍🔧  *Maintenance* 👨🏽‍🔧\n--------------------------\n" +
            dtt8;
        }

        var dtt9 = "";
        for (var i = 0; i < data6.length; i++) {
          dtt9 = dtt9 + "\n" + String(data6[i]);
        }

        dat = dat + dtt + dtt1 + dtt4 + dtt8 + "\n------------------------\n";

        // console.log(dat);

        client.sendMessage("919310988725-1466780613@g.us", dat);
      });
    }
  }, 60000);

  //end here MXL-Report------------------------------------------------------------------------------------------

  //Start here-LINE_SP_DoubleDeck Report 2pm-4pm-7pm(daily)

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (
      (date.getHours() === 14 && date.getMinutes() === 00) ||
      (date.getHours() === 16 && date.getMinutes() === 00) ||
      (date.getHours() === 19 && date.getMinutes() === 02)
    ) {
      // Check the time

      var config = {
        method: "get",
        url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      //Global Variable created
      var data1 = [];
      var data2 = [];
      var data = [];
      var data5 = [];
      var data3 = [];
      var data6 = [];
      var data18 = [];
      const count = {};
      const avg = {};
      const avgof = {};
      const avgmai = {};
      const avgsdays = {};
      const count1 = {};
      const count2 = {};

      axios(config).then(function (response) {
        var datamain = response.data.data.records["NO GROUPING"];

        console.log(datamain)
        var sum = [];
        var sumoffduty = [];
        var sumofmait = [];
        for (var i = 0; i < datamain.length; i++) {
          var cq = datamain[i].vehicle.customFields.filter((x) => x.value);

          if (kbd(cq).includes("LINE_SP_DoubleDeck")) {
            data1 = datamain[i].status;
            data.push(data1);

            if (
              datamain[i].status == "Available" ||
              datamain[i].status == "At delivery"
            ) {
              data2.push(datamain[i].currentHub);
              data18.push(datamain[i].currentTripPoint?.actualArrival);
              sum.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint?.actualArrival,
              ]);
            }

            if (datamain[i].status == "OffDuty") {
              data3.push(datamain[i].currentHub);
              sumoffduty.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }

            if (datamain[i].status == "Maintenance") {
              data5.push(datamain[i].currentHub);
              sumofmait.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }
          }
        }

        console.log(sum,"HELLO DATA!*")

        for (const element of data2) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        for (const element1 of sum) {
          if (avg[element1[0]]) {
            avg[element1[0]] += Number(element1[1]);
          } else {
            avg[element1[0]] = Number(element1[1]);
          }
        }
        function GetFullName1(_a) {
          var countFrom = new Date(_a);
          now = new Date();
          b = new Date(countFrom);
          distance = now.getTime() - b.getTime();

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(distance / secondsInADay);

          let xyz = days;

          return xyz.toFixed(0) + "d";
        }

        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        // avgsdays=sum11(avg, count)

        if (String(data.filter((x) => x == "Empty Run").length) == 0) {
          var odd = "";
        } else {
          var odd =
            "\n 🔘 EMPTY RUN: *" +
            String(data.filter((x) => x == "Empty Run").length) +
            "*";
        }

        // console.log(odd);

        if (String(data.filter((x) => x == "Available").length) == 0) {
          var empty = "";
        } else {
          var empty =
            " 🔴 EMPTY: *" +
            String(data.filter((x) => x == "Available").length) +
            "*";
        }
        // console.log(empty);
        if (String(data.filter((x) => x == "At delivery").length) == 0) {
          var unlp = "";
        } else {
          var unlp =
            "\n 🟣 UNLOADING POINT: *" +
            String(data.filter((x) => x == "At delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Maintenance").length) == 0) {
          var maintnc = "";
        } else {
          var maintnc =
            "\n 👨🏽‍🔧 MAINTENANCE: *" +
            String(data.filter((x) => x == "Maintenance").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Enroute for pickup").length) == 0) {
          var enrpickup = "";
        } else {
          var enrpickup =
            "\n 🟤 ONWAY TO LOADING POINT: *" +
            String(data.filter((x) => x == "Enroute for pickup").length) +
            "*";
        }

        if (String(data.filter((x) => x == "At pickup").length) == 0) {
          var loadingpoint = "";
        } else {
          var loadingpoint =
            "\n 🟡 LOADING POINT: *" +
            String(data.filter((x) => x == "At pickup").length) +
            "*";
        }

        if (
          String(data.filter((x) => x == "Enroute for delivery").length) == 0
        ) {
          var intransit = "";
        } else {
          var intransit =
            "\n 🟢 IN TRANSIT: *" +
            String(data.filter((x) => x == "Enroute for delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "OffDuty").length) == 0) {
          var offd = "";
        } else {
          var offd =
            "\n 🟠 OffDuty: *" +
            String(data.filter((x) => x == "OffDuty").length) +
            "*";
        }
        var dat =
          "*DOUBLE DECK TOTAL*:-" +
          " *" +
          String(data.length) +
          "* " +
          "\n-----------------------\n" +
          empty +
          unlp +
          maintnc +
          enrpickup +
          odd +
          loadingpoint +
          intransit +
          offd;

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(([key]) =>
            key.includes("APML")
          )
        );

        let entries = Object.entries(val);
        var dtt = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt =
            dtt +
            "\n" +
            String(entries[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt == "") {
          dtt = "";
        } else {
          dtt =
            "\n-------------------\n⚠️ *MT & UNLP* ⚠️\n----------------------\n            *Hub location* " +
            dtt;
        }

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(
            ([key]) => !key.includes("APML")
          )
        );
        console.log
        let entries2 = Object.entries(val);
        var dtt1 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt1 =
            dtt1 +
            "\n" +
            String(entries2[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        // console.log(dtt1, "xc");

        if (dtt1 == "") {
          dtt1 = "";
        } else {
          dtt1 =
            "\n------------------------\n          *Odd location*\n" + dtt1;
        }

        for (const element of data3) {
          if (count1[element]) {
            count1[element] += 1;
          } else {
            count1[element] = 1;
          }
        }

        for (const element1 of sumoffduty) {
          if (avgof[element1[0]]) {
            avgof[element1[0]] += Number(element1[1]);
          } else {
            avgof[element1[0]] = Number(element1[1]);
          }
        }
        // console.log(sumoffduty, "YEH HAI OFF DUTY KA");
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgof, count1)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries3 = Object.entries(val);
        var dtt4 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt4 =
            dtt4 +
            "\n" +
            String(entries3[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt4 == "") {
          dtt4 = "";
        } else {
          dtt4 =
            "\n---------------------------\n🚷  *Off Duty* 🚷 \n-------------------------" +
            dtt4;
        }

        for (const element of data5) {
          if (count2[element]) {
            count2[element] += 1;
          } else {
            count2[element] = 1;
          }
        }
        for (const element1 of sumofmait) {
          if (avgmai[element1[0]]) {
            avgmai[element1[0]] += Number(element1[1]);
          } else {
            avgmai[element1[0]] = Number(element1[1]);
          }
        }
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgmai, count2)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries4 = Object.entries(val);
        var dtt8 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt8 =
            dtt8 +
            "\n" +
            String(entries4[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }
        if (dtt8 == "") {
          dtt8 = "";
        } else {
          dtt8 =
            "\n--------------------------\n👨🏽‍🔧  *Maintenance* 👨🏽‍🔧\n--------------------------\n" +
            dtt8;
        }

        var dtt9 = "";
        for (var i = 0; i < data6.length; i++) {
          dtt9 = dtt9 + "\n" + String(data6[i]);
        }

        dat = dat + dtt + dtt1 + dtt4 + dtt8 + "\n------------------------\n";

        // console.log(dat);

        client.sendMessage("919310988725-1466780613@g.us", dat);
      });
    }
  }, 60000);

  //end here -LINE_SP_DoubleDeck Report

  //Start here-SXL 2pm-4pm-7pm(daily)

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (
      (date.getHours() === 14 && date.getMinutes() === 00) ||
      (date.getHours() === 16 && date.getMinutes() === 00) ||
      (date.getHours() === 19 && date.getMinutes() === 02)
    ) {
      // Check the time

      var config = {
        method: "get",
        url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      //Global Variable created
      var data1 = [];
      var data2 = [];
      var data = [];
      var data5 = [];
      var data3 = [];
      var data6 = [];
      var data18 = [];
      const count = {};
      const avg = {};
      const avgof = {};
      const avgmai = {};
      const avgsdays = {};
      const count1 = {};
      const count2 = {};

      axios(config).then(function (response) {
        var datamain = response.data.data.records["NO GROUPING"];

        console.log(datamain)
        var sum = [];
        var sumoffduty = [];
        var sumofmait = [];
        for (var i = 0; i < datamain.length; i++) {
          var cq = datamain[i].vehicle.customFields.filter((x) => x.value);

          if (kbd(cq).includes("LINE_SXL")) {
            data1 = datamain[i].status;
            data.push(data1);

            if (
              datamain[i].status == "Available" ||
              datamain[i].status == "At delivery"
            ) {
              data2.push(datamain[i].currentHub);
              data18.push(datamain[i].currentTripPoint?.actualArrival);
              sum.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint?.actualArrival,
              ]);
            }

            if (datamain[i].status == "OffDuty") {
              data3.push(datamain[i].currentHub);
              sumoffduty.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }

            if (datamain[i].status == "Maintenance") {
              data5.push(datamain[i].currentHub);
              sumofmait.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }
          }
        }

        console.log(sum,"HELLO DATA!*")

        for (const element of data2) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        for (const element1 of sum) {
          if (avg[element1[0]]) {
            avg[element1[0]] += Number(element1[1]);
          } else {
            avg[element1[0]] = Number(element1[1]);
          }
        }
        function GetFullName1(_a) {
          var countFrom = new Date(_a);
          now = new Date();
          b = new Date(countFrom);
          distance = now.getTime() - b.getTime();

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(distance / secondsInADay);

          let xyz = days;

          return xyz.toFixed(0) + "d";
        }

        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        // avgsdays=sum11(avg, count)

        if (String(data.filter((x) => x == "Empty Run").length) == 0) {
          var odd = "";
        } else {
          var odd =
            "\n 🔘 EMPTY RUN: *" +
            String(data.filter((x) => x == "Empty Run").length) +
            "*";
        }

        // console.log(odd);

        if (String(data.filter((x) => x == "Available").length) == 0) {
          var empty = "";
        } else {
          var empty =
            " 🔴 EMPTY: *" +
            String(data.filter((x) => x == "Available").length) +
            "*";
        }
        // console.log(empty);
        if (String(data.filter((x) => x == "At delivery").length) == 0) {
          var unlp = "";
        } else {
          var unlp =
            "\n 🟣 UNLOADING POINT: *" +
            String(data.filter((x) => x == "At delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Maintenance").length) == 0) {
          var maintnc = "";
        } else {
          var maintnc =
            "\n 👨🏽‍🔧 MAINTENANCE: *" +
            String(data.filter((x) => x == "Maintenance").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Enroute for pickup").length) == 0) {
          var enrpickup = "";
        } else {
          var enrpickup =
            "\n 🟤 ONWAY TO LOADING POINT: *" +
            String(data.filter((x) => x == "Enroute for pickup").length) +
            "*";
        }

        if (String(data.filter((x) => x == "At pickup").length) == 0) {
          var loadingpoint = "";
        } else {
          var loadingpoint =
            "\n 🟡 LOADING POINT: *" +
            String(data.filter((x) => x == "At pickup").length) +
            "*";
        }

        if (
          String(data.filter((x) => x == "Enroute for delivery").length) == 0
        ) {
          var intransit = "";
        } else {
          var intransit =
            "\n 🟢 IN TRANSIT: *" +
            String(data.filter((x) => x == "Enroute for delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "OffDuty").length) == 0) {
          var offd = "";
        } else {
          var offd =
            "\n 🟠 OffDuty: *" +
            String(data.filter((x) => x == "OffDuty").length) +
            "*";
        }
        var dat =
          "*SXL TOTAL*:-" +
          " *" +
          String(data.length) +
          "* " +
          "\n-----------------------\n" +
          empty +
          unlp +
          maintnc +
          enrpickup +
          odd +
          loadingpoint +
          intransit +
          offd;

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(([key]) =>
            key.includes("APML")
          )
        );

        let entries = Object.entries(val);
        var dtt = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt =
            dtt +
            "\n" +
            String(entries[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt == "") {
          dtt = "";
        } else {
          dtt =
            "\n-------------------\n⚠️ *MT & UNLP* ⚠️\n----------------------\n            *Hub location* " +
            dtt;
        }

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(
            ([key]) => !key.includes("APML")
          )
        );
        console.log
        let entries2 = Object.entries(val);
        var dtt1 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt1 =
            dtt1 +
            "\n" +
            String(entries2[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        // console.log(dtt1, "xc");

        if (dtt1 == "") {
          dtt1 = "";
        } else {
          dtt1 =
            "\n------------------------\n          *Odd location*\n" + dtt1;
        }

        for (const element of data3) {
          if (count1[element]) {
            count1[element] += 1;
          } else {
            count1[element] = 1;
          }
        }

        for (const element1 of sumoffduty) {
          if (avgof[element1[0]]) {
            avgof[element1[0]] += Number(element1[1]);
          } else {
            avgof[element1[0]] = Number(element1[1]);
          }
        }
        // console.log(sumoffduty, "YEH HAI OFF DUTY KA");
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgof, count1)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries3 = Object.entries(val);
        var dtt4 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt4 =
            dtt4 +
            "\n" +
            String(entries3[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt4 == "") {
          dtt4 = "";
        } else {
          dtt4 =
            "\n---------------------------\n🚷  *Off Duty* 🚷 \n-------------------------" +
            dtt4;
        }

        for (const element of data5) {
          if (count2[element]) {
            count2[element] += 1;
          } else {
            count2[element] = 1;
          }
        }
        for (const element1 of sumofmait) {
          if (avgmai[element1[0]]) {
            avgmai[element1[0]] += Number(element1[1]);
          } else {
            avgmai[element1[0]] = Number(element1[1]);
          }
        }
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgmai, count2)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries4 = Object.entries(val);
        var dtt8 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt8 =
            dtt8 +
            "\n" +
            String(entries4[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }
        if (dtt8 == "") {
          dtt8 = "";
        } else {
          dtt8 =
            "\n--------------------------\n👨🏽‍🔧  *Maintenance* 👨🏽‍🔧\n--------------------------\n" +
            dtt8;
        }

        var dtt9 = "";
        for (var i = 0; i < data6.length; i++) {
          dtt9 = dtt9 + "\n" + String(data6[i]);
        }

        dat = dat + dtt + dtt1 + dtt4 + dtt8 + "\n------------------------\n";

        // console.log(dat);

        client.sendMessage("919310988725-1466780613@g.us", dat);
      });
    }
  }, 60000);

  //end here -SXL Report

  //Start here-AIR SUSPENSION 2pm-4pm-7pm(daily)

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (
      (date.getHours() === 14 && date.getMinutes() === 00) ||
      (date.getHours() === 16 && date.getMinutes() === 00) ||
      (date.getHours() === 19 && date.getMinutes() === 02)
    ) {
      // Check the time

      var config = {
        method: "get",
        url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      //Global Variable created
      var data1 = [];
      var data2 = [];
      var data = [];
      var data5 = [];
      var data3 = [];
      var data6 = [];
      var data18 = [];
      const count = {};
      const avg = {};
      const avgof = {};
      const avgmai = {};
      const avgsdays = {};
      const count1 = {};
      const count2 = {};

      axios(config).then(function (response) {
        var datamain = response.data.data.records["NO GROUPING"];

        console.log(datamain)
        var sum = [];
        var sumoffduty = [];
        var sumofmait = [];
        for (var i = 0; i < datamain.length; i++) {
          var cq = datamain[i].vehicle.customFields.filter((x) => x.value);

          if (kbd(cq).includes("LINE_AS")) {
            data1 = datamain[i].status;
            data.push(data1);

            if (
              datamain[i].status == "Available" ||
              datamain[i].status == "At delivery"
            ) {
              data2.push(datamain[i].currentHub);
              data18.push(datamain[i].currentTripPoint?.actualArrival);
              sum.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint?.actualArrival,
              ]);
            }

            if (datamain[i].status == "OffDuty") {
              data3.push(datamain[i].currentHub);
              sumoffduty.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }

            if (datamain[i].status == "Maintenance") {
              data5.push(datamain[i].currentHub);
              sumofmait.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }
          }
        }

        console.log(sum,"HELLO DATA!*")

        for (const element of data2) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        for (const element1 of sum) {
          if (avg[element1[0]]) {
            avg[element1[0]] += Number(element1[1]);
          } else {
            avg[element1[0]] = Number(element1[1]);
          }
        }
        function GetFullName1(_a) {
          var countFrom = new Date(_a);
          now = new Date();
          b = new Date(countFrom);
          distance = now.getTime() - b.getTime();

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(distance / secondsInADay);

          let xyz = days;

          return xyz.toFixed(0) + "d";
        }

        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        // avgsdays=sum11(avg, count)

        if (String(data.filter((x) => x == "Empty Run").length) == 0) {
          var odd = "";
        } else {
          var odd =
            "\n 🔘 EMPTY RUN: *" +
            String(data.filter((x) => x == "Empty Run").length) +
            "*";
        }

        // console.log(odd);

        if (String(data.filter((x) => x == "Available").length) == 0) {
          var empty = "";
        } else {
          var empty =
            " 🔴 EMPTY: *" +
            String(data.filter((x) => x == "Available").length) +
            "*";
        }
        // console.log(empty);
        if (String(data.filter((x) => x == "At delivery").length) == 0) {
          var unlp = "";
        } else {
          var unlp =
            "\n 🟣 UNLOADING POINT: *" +
            String(data.filter((x) => x == "At delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Maintenance").length) == 0) {
          var maintnc = "";
        } else {
          var maintnc =
            "\n 👨🏽‍🔧 MAINTENANCE: *" +
            String(data.filter((x) => x == "Maintenance").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Enroute for pickup").length) == 0) {
          var enrpickup = "";
        } else {
          var enrpickup =
            "\n 🟤 ONWAY TO LOADING POINT: *" +
            String(data.filter((x) => x == "Enroute for pickup").length) +
            "*";
        }

        if (String(data.filter((x) => x == "At pickup").length) == 0) {
          var loadingpoint = "";
        } else {
          var loadingpoint =
            "\n 🟡 LOADING POINT: *" +
            String(data.filter((x) => x == "At pickup").length) +
            "*";
        }

        if (
          String(data.filter((x) => x == "Enroute for delivery").length) == 0
        ) {
          var intransit = "";
        } else {
          var intransit =
            "\n 🟢 IN TRANSIT: *" +
            String(data.filter((x) => x == "Enroute for delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "OffDuty").length) == 0) {
          var offd = "";
        } else {
          var offd =
            "\n 🟠 OffDuty: *" +
            String(data.filter((x) => x == "OffDuty").length) +
            "*";
        }
        var dat =
          "*AIR SUSPENSION TOTAL*:-" +
          " *" +
          String(data.length) +
          "* " +
          "\n-----------------------\n" +
          empty +
          unlp +
          maintnc +
          enrpickup +
          odd +
          loadingpoint +
          intransit +
          offd;

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(([key]) =>
            key.includes("APML")
          )
        );

        let entries = Object.entries(val);
        var dtt = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt =
            dtt +
            "\n" +
            String(entries[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt == "") {
          dtt = "";
        } else {
          dtt =
            "\n-------------------\n⚠️ *MT & UNLP* ⚠️\n----------------------\n            *Hub location* " +
            dtt;
        }

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(
            ([key]) => !key.includes("APML")
          )
        );
        console.log
        let entries2 = Object.entries(val);
        var dtt1 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt1 =
            dtt1 +
            "\n" +
            String(entries2[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        // console.log(dtt1, "xc");

        if (dtt1 == "") {
          dtt1 = "";
        } else {
          dtt1 =
            "\n------------------------\n          *Odd location*\n" + dtt1;
        }

        for (const element of data3) {
          if (count1[element]) {
            count1[element] += 1;
          } else {
            count1[element] = 1;
          }
        }

        for (const element1 of sumoffduty) {
          if (avgof[element1[0]]) {
            avgof[element1[0]] += Number(element1[1]);
          } else {
            avgof[element1[0]] = Number(element1[1]);
          }
        }
        // console.log(sumoffduty, "YEH HAI OFF DUTY KA");
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgof, count1)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries3 = Object.entries(val);
        var dtt4 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt4 =
            dtt4 +
            "\n" +
            String(entries3[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt4 == "") {
          dtt4 = "";
        } else {
          dtt4 =
            "\n---------------------------\n🚷  *Off Duty* 🚷 \n-------------------------" +
            dtt4;
        }

        for (const element of data5) {
          if (count2[element]) {
            count2[element] += 1;
          } else {
            count2[element] = 1;
          }
        }
        for (const element1 of sumofmait) {
          if (avgmai[element1[0]]) {
            avgmai[element1[0]] += Number(element1[1]);
          } else {
            avgmai[element1[0]] = Number(element1[1]);
          }
        }
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgmai, count2)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries4 = Object.entries(val);
        var dtt8 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt8 =
            dtt8 +
            "\n" +
            String(entries4[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }
        if (dtt8 == "") {
          dtt8 = "";
        } else {
          dtt8 =
            "\n--------------------------\n👨🏽‍🔧  *Maintenance* 👨🏽‍🔧\n--------------------------\n" +
            dtt8;
        }

        var dtt9 = "";
        for (var i = 0; i < data6.length; i++) {
          dtt9 = dtt9 + "\n" + String(data6[i]);
        }

        dat = dat + dtt + dtt1 + dtt4 + dtt8 + "\n------------------------\n";

        // console.log(dat);

        client.sendMessage("919310988725-1466780613@g.us", dat);
      });
    }
  }, 60000);

  //end here -AIR SUSPENSION Report

  //Start here-EFR 2pm-4pm-7pm(daily)

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (
      (date.getHours() === 14 && date.getMinutes() === 00) ||
      (date.getHours() === 16 && date.getMinutes() === 00) ||
      (date.getHours() === 19 && date.getMinutes() === 02)
    ) {
      // Check the time

      var config = {
        method: "get",
        url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      //Global Variable created
      var data1 = [];
      var data2 = [];
      var data = [];
      var data5 = [];
      var data3 = [];
      var data6 = [];
      var data18 = [];
      const count = {};
      const avg = {};
      const avgof = {};
      const avgmai = {};
      const avgsdays = {};
      const count1 = {};
      const count2 = {};

      axios(config).then(function (response) {
        var datamain = response.data.data.records["NO GROUPING"];

        console.log(datamain)
        var sum = [];
        var sumoffduty = [];
        var sumofmait = [];
        for (var i = 0; i < datamain.length; i++) {
          var cq = datamain[i].vehicle.customFields.filter((x) => x.value);

          if (kbd(cq).includes("EFR")) {
            data1 = datamain[i].status;
            data.push(data1);

            if (
              datamain[i].status == "Available" ||
              datamain[i].status == "At delivery"
            ) {
              data2.push(datamain[i].currentHub);
              data18.push(datamain[i].currentTripPoint?.actualArrival);
              sum.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint?.actualArrival,
              ]);
            }

            if (datamain[i].status == "OffDuty") {
              data3.push(datamain[i].currentHub);
              sumoffduty.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }

            if (datamain[i].status == "Maintenance") {
              data5.push(datamain[i].currentHub);
              sumofmait.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }
          }
        }

        console.log(sum,"HELLO DATA!*")

        for (const element of data2) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        for (const element1 of sum) {
          if (avg[element1[0]]) {
            avg[element1[0]] += Number(element1[1]);
          } else {
            avg[element1[0]] = Number(element1[1]);
          }
        }
        function GetFullName1(_a) {
          var countFrom = new Date(_a);
          now = new Date();
          b = new Date(countFrom);
          distance = now.getTime() - b.getTime();

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(distance / secondsInADay);

          let xyz = days;

          return xyz.toFixed(0) + "d";
        }

        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        // avgsdays=sum11(avg, count)

        if (String(data.filter((x) => x == "Empty Run").length) == 0) {
          var odd = "";
        } else {
          var odd =
            "\n 🔘 EMPTY RUN: *" +
            String(data.filter((x) => x == "Empty Run").length) +
            "*";
        }

        // console.log(odd);

        if (String(data.filter((x) => x == "Available").length) == 0) {
          var empty = "";
        } else {
          var empty =
            " 🔴 EMPTY: *" +
            String(data.filter((x) => x == "Available").length) +
            "*";
        }
        // console.log(empty);
        if (String(data.filter((x) => x == "At delivery").length) == 0) {
          var unlp = "";
        } else {
          var unlp =
            "\n 🟣 UNLOADING POINT: *" +
            String(data.filter((x) => x == "At delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Maintenance").length) == 0) {
          var maintnc = "";
        } else {
          var maintnc =
            "\n 👨🏽‍🔧 MAINTENANCE: *" +
            String(data.filter((x) => x == "Maintenance").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Enroute for pickup").length) == 0) {
          var enrpickup = "";
        } else {
          var enrpickup =
            "\n 🟤 ONWAY TO LOADING POINT: *" +
            String(data.filter((x) => x == "Enroute for pickup").length) +
            "*";
        }

        if (String(data.filter((x) => x == "At pickup").length) == 0) {
          var loadingpoint = "";
        } else {
          var loadingpoint =
            "\n 🟡 LOADING POINT: *" +
            String(data.filter((x) => x == "At pickup").length) +
            "*";
        }

        if (
          String(data.filter((x) => x == "Enroute for delivery").length) == 0
        ) {
          var intransit = "";
        } else {
          var intransit =
            "\n 🟢 IN TRANSIT: *" +
            String(data.filter((x) => x == "Enroute for delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "OffDuty").length) == 0) {
          var offd = "";
        } else {
          var offd =
            "\n 🟠 OffDuty: *" +
            String(data.filter((x) => x == "OffDuty").length) +
            "*";
        }
        var dat =
          "*EFR TOTAL*:-" +
          " *" +
          String(data.length) +
          "* " +
          "\n-----------------------\n" +
          empty +
          unlp +
          maintnc +
          enrpickup +
          odd +
          loadingpoint +
          intransit +
          offd;

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(([key]) =>
            key.includes("APML")
          )
        );

        let entries = Object.entries(val);
        var dtt = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt =
            dtt +
            "\n" +
            String(entries[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt == "") {
          dtt = "";
        } else {
          dtt =
            "\n-------------------\n⚠️ *MT & UNLP* ⚠️\n----------------------\n            *Hub location* " +
            dtt;
        }

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(
            ([key]) => !key.includes("APML")
          )
        );
        console.log
        let entries2 = Object.entries(val);
        var dtt1 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt1 =
            dtt1 +
            "\n" +
            String(entries2[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        // console.log(dtt1, "xc");

        if (dtt1 == "") {
          dtt1 = "";
        } else {
          dtt1 =
            "\n------------------------\n          *Odd location*\n" + dtt1;
        }

        for (const element of data3) {
          if (count1[element]) {
            count1[element] += 1;
          } else {
            count1[element] = 1;
          }
        }

        for (const element1 of sumoffduty) {
          if (avgof[element1[0]]) {
            avgof[element1[0]] += Number(element1[1]);
          } else {
            avgof[element1[0]] = Number(element1[1]);
          }
        }
        // console.log(sumoffduty, "YEH HAI OFF DUTY KA");
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgof, count1)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries3 = Object.entries(val);
        var dtt4 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt4 =
            dtt4 +
            "\n" +
            String(entries3[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt4 == "") {
          dtt4 = "";
        } else {
          dtt4 =
            "\n---------------------------\n🚷  *Off Duty* 🚷 \n-------------------------" +
            dtt4;
        }

        for (const element of data5) {
          if (count2[element]) {
            count2[element] += 1;
          } else {
            count2[element] = 1;
          }
        }
        for (const element1 of sumofmait) {
          if (avgmai[element1[0]]) {
            avgmai[element1[0]] += Number(element1[1]);
          } else {
            avgmai[element1[0]] = Number(element1[1]);
          }
        }
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgmai, count2)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries4 = Object.entries(val);
        var dtt8 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt8 =
            dtt8 +
            "\n" +
            String(entries4[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }
        if (dtt8 == "") {
          dtt8 = "";
        } else {
          dtt8 =
            "\n--------------------------\n👨🏽‍🔧  *Maintenance* 👨🏽‍🔧\n--------------------------\n" +
            dtt8;
        }

        var dtt9 = "";
        for (var i = 0; i < data6.length; i++) {
          dtt9 = dtt9 + "\n" + String(data6[i]);
        }

        dat = dat + dtt + dtt1 + dtt4 + dtt8 + "\n------------------------\n";

        // console.log(dat);

        client.sendMessage("120363043845542996@g.us", dat);
      });
    }
  }, 60000);

  //end here -EFR Report

  //Start here-TRAILER Report 2pm-4pm-7pm(daily)

  setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (
      (date.getHours() === 14 && date.getMinutes() === 00) ||
      (date.getHours() === 16 && date.getMinutes() === 00) ||
      (date.getHours() === 19 && date.getMinutes() === 02)
    ) {
      // Check the time

      var config = {
        method: "get",
        url: "https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab=ALL VEHICLES",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      //Global Variable created
      var data1 = [];
      var data2 = [];
      var data = [];
      var data5 = [];
      var data3 = [];
      var data6 = [];
      var data18 = [];
      const count = {};
      const avg = {};
      const avgof = {};
      const avgmai = {};
      const avgsdays = {};
      const count1 = {};
      const count2 = {};

      axios(config).then(function (response) {
        var datamain = response.data.data.records["NO GROUPING"];

        console.log(datamain)
        var sum = [];
        var sumoffduty = [];
        var sumofmait = [];
        for (var i = 0; i < datamain.length; i++) {
          var cq = datamain[i].vehicle.customFields.filter((x) => x.value);

          if (kbd(cq).includes("LINE_TRAILER")) {
            data1 = datamain[i].status;
            data.push(data1);

            if (
              datamain[i].status == "Available" ||
              datamain[i].status == "At delivery"
            ) {
              data2.push(datamain[i].currentHub);
              data18.push(datamain[i].currentTripPoint?.actualArrival);
              sum.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint?.actualArrival,
              ]);
            }

            if (datamain[i].status == "OffDuty") {
              data3.push(datamain[i].currentHub);
              sumoffduty.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }

            if (datamain[i].status == "Maintenance") {
              data5.push(datamain[i].currentHub);
              sumofmait.push([
                datamain[i].currentHub,
                datamain[i].currentTripPoint.actualArrival,
              ]);
            }
          }
        }

        console.log(sum,"HELLO DATA!*")

        for (const element of data2) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }

        for (const element1 of sum) {
          if (avg[element1[0]]) {
            avg[element1[0]] += Number(element1[1]);
          } else {
            avg[element1[0]] = Number(element1[1]);
          }
        }
        function GetFullName1(_a) {
          var countFrom = new Date(_a);
          now = new Date();
          b = new Date(countFrom);
          distance = now.getTime() - b.getTime();

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(distance / secondsInADay);

          let xyz = days;

          return xyz.toFixed(0) + "d";
        }

        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        // avgsdays=sum11(avg, count)

        if (String(data.filter((x) => x == "Empty Run").length) == 0) {
          var odd = "";
        } else {
          var odd =
            "\n 🔘 EMPTY RUN: *" +
            String(data.filter((x) => x == "Empty Run").length) +
            "*";
        }

        // console.log(odd);

        if (String(data.filter((x) => x == "Available").length) == 0) {
          var empty = "";
        } else {
          var empty =
            " 🔴 EMPTY: *" +
            String(data.filter((x) => x == "Available").length) +
            "*";
        }
        // console.log(empty);
        if (String(data.filter((x) => x == "At delivery").length) == 0) {
          var unlp = "";
        } else {
          var unlp =
            "\n 🟣 UNLOADING POINT: *" +
            String(data.filter((x) => x == "At delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Maintenance").length) == 0) {
          var maintnc = "";
        } else {
          var maintnc =
            "\n 👨🏽‍🔧 MAINTENANCE: *" +
            String(data.filter((x) => x == "Maintenance").length) +
            "*";
        }

        if (String(data.filter((x) => x == "Enroute for pickup").length) == 0) {
          var enrpickup = "";
        } else {
          var enrpickup =
            "\n 🟤 ONWAY TO LOADING POINT: *" +
            String(data.filter((x) => x == "Enroute for pickup").length) +
            "*";
        }

        if (String(data.filter((x) => x == "At pickup").length) == 0) {
          var loadingpoint = "";
        } else {
          var loadingpoint =
            "\n 🟡 LOADING POINT: *" +
            String(data.filter((x) => x == "At pickup").length) +
            "*";
        }

        if (
          String(data.filter((x) => x == "Enroute for delivery").length) == 0
        ) {
          var intransit = "";
        } else {
          var intransit =
            "\n 🟢 IN TRANSIT: *" +
            String(data.filter((x) => x == "Enroute for delivery").length) +
            "*";
        }

        if (String(data.filter((x) => x == "OffDuty").length) == 0) {
          var offd = "";
        } else {
          var offd =
            "\n 🟠 OffDuty: *" +
            String(data.filter((x) => x == "OffDuty").length) +
            "*";
        }
        var dat =
          "*TRAILER TOTAL*:-" +
          " *" +
          String(data.length) +
          "* " +
          "\n-----------------------\n" +
          empty +
          unlp +
          maintnc +
          enrpickup +
          odd +
          loadingpoint +
          intransit +
          offd;

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(([key]) =>
            key.includes("APML")
          )
        );

        let entries = Object.entries(val);
        var dtt = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt =
            dtt +
            "\n" +
            String(entries[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt == "") {
          dtt = "";
        } else {
          dtt =
            "\n-------------------\n⚠️ *MT & UNLP* ⚠️\n----------------------\n            *Hub location* " +
            dtt;
        }

        var val = Object.fromEntries(
          Object.entries(sum11(avg, count)).filter(
            ([key]) => !key.includes("APML")
          )
        );
        console.log
        let entries2 = Object.entries(val);
        var dtt1 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt1 =
            dtt1 +
            "\n" +
            String(entries2[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        // console.log(dtt1, "xc");

        if (dtt1 == "") {
          dtt1 = "";
        } else {
          dtt1 =
            "\n------------------------\n          *Odd location*\n" + dtt1;
        }

        for (const element of data3) {
          if (count1[element]) {
            count1[element] += 1;
          } else {
            count1[element] = 1;
          }
        }

        for (const element1 of sumoffduty) {
          if (avgof[element1[0]]) {
            avgof[element1[0]] += Number(element1[1]);
          } else {
            avgof[element1[0]] = Number(element1[1]);
          }
        }
        // console.log(sumoffduty, "YEH HAI OFF DUTY KA");
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgof, count1)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries3 = Object.entries(val);
        var dtt4 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt4 =
            dtt4 +
            "\n" +
            String(entries3[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }

        if (dtt4 == "") {
          dtt4 = "";
        } else {
          dtt4 =
            "\n---------------------------\n🚷  *Off Duty* 🚷 \n-------------------------" +
            dtt4;
        }

        for (const element of data5) {
          if (count2[element]) {
            count2[element] += 1;
          } else {
            count2[element] = 1;
          }
        }
        for (const element1 of sumofmait) {
          if (avgmai[element1[0]]) {
            avgmai[element1[0]] += Number(element1[1]);
          } else {
            avgmai[element1[0]] = Number(element1[1]);
          }
        }
        function sum11(ob1, ob2) {
          let sum = {};

          Object.keys(ob1).forEach((key) => {
            if (ob2.hasOwnProperty(key)) {
              sum[key] = ob2[key] + "v " + GetFullName1(ob1[key] / ob2[key]);
            }
          });
          return sum;
        }
        var val = Object.fromEntries(
          Object.entries(sum11(avgmai, count2)).filter(
            ([key]) => key.includes("APML") || !key.includes("APML")
          )
        );

        let entries4 = Object.entries(val);
        var dtt8 = "";
        for (var i = 0; i < Object.entries(val).length; i++) {
          dtt8 =
            dtt8 +
            "\n" +
            String(entries4[i])
              .replace(",", ":  ")
              .replace("APML", "")
              .replace(/ *\([^)]*\) */g, "");
        }
        if (dtt8 == "") {
          dtt8 = "";
        } else {
          dtt8 =
            "\n--------------------------\n👨🏽‍🔧  *Maintenance* 👨🏽‍🔧\n--------------------------\n" +
            dtt8;
        }

        var dtt9 = "";
        for (var i = 0; i < data6.length; i++) {
          dtt9 = dtt9 + "\n" + String(data6[i]);
        }

        dat = dat + dtt + dtt1 + dtt4 + dtt8 + "\n------------------------\n";

        // console.log(dat);

        client.sendMessage("919310988725-1466780613@g.us", dat);
      });
    }
  }, 60000);

  //END TRAILER-------------------------------------------------------------------------------------------------------

  //Start here Tyre puncture Ticket Auto Forward to group

  setInterval(function () {
    // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() < 25) {
      // Check the time

      axios(config)
        .then(function (response) {
          // getting data of tickets from scmapml
          var config23 = {
            method: "get",
            url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Tyre Puncture Bot"],"status.keyword":["Open"]}',
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
            },
          };

          // getting data of tickets already posted to group

          var config232 = {
            method: "get",
            url: "https://script.google.com/macros/s/AKfycbwvzJCDeNOjcC5nm1MopfasWi9Qp5A3F_3CfdJXePzjASpjqDVAova-h9NYG4KUQjjy8g/exec?action=getUser",
            headers: {
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
          };

          var data;
          var ticketArray1 = [];

          axios(config23)
            .then(function (response) {
              data = response.data.map((x) => ({
                customFields: x.customFields.map((x) => ({
                  fieldKey: x.fieldKey,
                  value: x.value,
                })),
                CreatedAt: x.createdAt,
                Ticket: x.issueNo,
              }));

              for (let i = 0; i < data.length; i++) {
                ticketArray1.push(data[i].Ticket);
              }
              console.log(
                ticketArray1.length,
                "Total scmapml open tickets tyre Puncture Bot"
              );
              axios(config232)
                .then(function (response) {
                  array2 = [];
                  for (var j = 0; j < response.data.length; j++) {
                    array2.push(response.data[j].DATA);
                  }
                  console.log(
                    array2.length,
                    "Total sheet data tyre Puncture Bot"
                  );
                  var array3 = ticketArray1.filter(function (obj) {
                    return array2.indexOf(obj) == -1;
                  });
           console.log(array3.length, "Total pending tyre Puncture Bot");

                  // console.log(array3)
                  for (let j = 0; j < array3.length; j++) {
                    if (array3.length > 10) {
                      break;
                    }
                    var data = JSON.stringify({
                      DATA: array3[j],
                    });
                    var config234 = {
                      method: "get",
                      url:
                        'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Tyre Puncture Bot"],"issueNo.keyword":["' +
                        array3[j] +
                        '"],"status.keyword":["Open"]}',
                      headers: {
                        Authorization:
                          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
                      },
                    };

                    axios(config234)
                      .then(function (response) {
                        var variData = response.data.map((x) => ({
                          customFields: x.customFields.map((x) => ({
                            fieldKey: x.fieldKey,
                            value: x.value,
                          })),
                        }));
                        var dc = variData[0].customFields[3].value || "null";
                        var dc = "+91" + dc.substring(2);
                        // console.log(dc.substring(2), "Driver Number");

                        var ticket = array3[j];

                        var bc = variData[0].customFields[4].value || "null";
                        // console.log(bc, "vehicle no");
                        var cd = variData[0].customFields[5].value || "null";
                        // console.log(cd, "main issue");
                        var de = variData[0].customFields[6].value || "null";
                        // console.log(de, "sub issue");
                        var ef = variData[0].customFields[7].value || "null";
                        // console.log(ef, "puncture pic");
                        var fg = variData[0].customFields[8].value || "null";
                        // console.log(fg, "vehicle load/empty");
                        var aa = variData[0].customFields[12].value || "null";
                        // console.log(aa, "driver location");
                        var bb = variData[0].customFields[13].value || "null";
                        // console.log(bb, "tyre number");

                        var bab = variData[0].customFields[17].value || "null";
                        // console.log(bab, "Stepney");

                        client.sendMessage(
                          "918178562171-1616845470@g.us",
                          " *" +
                            de +
                            "* \n📰 " +
                            ticket +
                            "\n👨🏼‍🚀DriverNo. " +
                            dc +
                            "\n🚚VehicleNo." +
                            bc +
                            "\n🕵🏼‍♂️Proof : " +
                            ef +
                            "\nVehicle Status: " +
                            fg +
                            "\n🌎Driver Location: " +
                            aa +
                            "\n⚠️Stepney : " +
                            bab +
                            "\n +918871681277 Please look into it\n\n\n--  *APML Control Room*"
                        );
                      })
                      .catch(function (error) {
                     console.log(error);
                      });
                    var config231 = {
                      method: "post",
                      url: "https://script.google.com/macros/s/AKfycbwvzJCDeNOjcC5nm1MopfasWi9Qp5A3F_3CfdJXePzjASpjqDVAova-h9NYG4KUQjjy8g/exec?action=addUser",
                      headers: {
                        "Content-Type": "application/json",
                        Cookie:
                          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                      },
                      data: data,
                    };
                   console.log(data);

                    axios(config231).catch(function (error) {
                     console.log(error);
                    });
                  }
                })
                .catch(function (error) {
                console.log(error);
                });
            })
            .catch(function (error) {
              // console.log(error);
            });

          // END ----------------------------------------------------------------------------------------------------------------

          //start here Gaddi Malik BOT-Ticket forward to group
          var config231 = {
            method: "get",
            url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Gaadi Malik Issue"],"status.keyword":["Open"]}',
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
            },
          };

          // getting data of tickets already posted to group

          var config2321 = {
            method: "get",
            url: "https://script.google.com/macros/s/AKfycbwcT1Ee3i1nTAOlyxXmd3vhZfvtEhAJPK5YDy5wlkzClzu_tiIAmMMV7fQn9LRw6LhJ/exec?action=getUser",
            headers: {
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
          };

          var data;
          var ticketArray2 = [];

          axios(config231)
            .then(function (response) {
              data = response.data.map((x) => ({
                customFields: x.customFields.map((x) => ({
                  fieldKey: x.fieldKey,
                  value: x.value,
                })),
                CreatedAt: x.createdAt,
                Ticket: x.issueNo,
              }));

              for (let i = 0; i < data.length; i++) {
                ticketArray2.push(data[i].Ticket);
              }
              console.log(
                ticketArray2.length,
                "Total scmapml open tickets Gaadi Malik Issue"
              );
              axios(config2321)
                .then(function (response) {
                  array2 = [];
                  for (var j = 0; j < response.data.length; j++) {
                    array2.push(response.data[j].DATA);
                  }
                  console.log(
                    array2.length,
                    "Total sheet data Gaadi Malik Issue "
                  );
                  var array31 = ticketArray2.filter(function (obj) {
                    return array2.indexOf(obj) == -1;
                  });
                  console.log(
                    array31.length,
                    "Total pending Gaadi Malik Issue"
                  );

                  // console.log(array3)
                  for (let j = 0; j < array31.length; j++) {
                    if (array31.length > 10) {
                      break;
                    }
                    var data = JSON.stringify({
                      DATA: array31[j],
                    });
                    var config2341 = {
                      method: "get",
                      url:
                        'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Gaadi Malik Issue"],"issueNo.keyword":["' +
                        array31[j] +
                        '"],"status.keyword":["Open"]}',
                      headers: {
                        Authorization:
                          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
                      },
                    };

                    axios(config2341)
                      .then(function (response) {
                        var variData = response.data.map((x) => ({
                          customFields: x.customFields.map((x) => ({
                            fieldKey: x.fieldKey,
                            value: x.value,
                          })),
                        }));
                        var dc1 = variData[0].customFields[2].value || "null";
                        var dc1 = "+91" + dc1.substring(2);
                        // console.log(dc1.substring(2), "Driver Number");

                        var ticket1 = array31[j];

                        var bc1 = variData[0].customFields[3].value || "null";
                        // console.log(bc1, "vehicle no");
                        var cd1 = variData[0].customFields[4].value || "null";
                        // console.log(cd1, "main issue");
                        var de1 = variData[0].customFields[5].value || "null";
                        // console.log(de1, "sub issue");

                        var fg1 = variData[0].customFields[6].value || "null";
                        // console.log(fg1, "vehicle load/empty");
                        var aa1 = variData[0].customFields[7].value || "null";
                        // console.log(aa1, "driver location");
                        var aa5 = variData[0].customFields[8].value || "null";
                        // console.log(aa5, "advacne sub issue");

                        client.sendMessage(
                          "120363045648565871@g.us",
                          " *" +
                            cd1 +
                            "*\n*" +
                            de1 +
                            "* \n📰 " +
                            ticket1 +
                            "\n👨🏼‍🚀DriverNo. " +
                            dc1 +
                            "\n🚚VehicleNo." +
                            bc1 +
                            "\nVehicle Status: " +
                            fg1 +
                            "\n🌎Driver Location: " +
                            aa1 +
                            "\n" +
                            aa5 +
                            "\n\n Concerned Gaadi Malik, Please look into it\n\n\n--  *APML Control Room*"
                        );
                      })
                      .catch(function (error) {
                       console.log(error);
                      });
                    var config231 = {
                      method: "post",
                      url: "https://script.google.com/macros/s/AKfycbwcT1Ee3i1nTAOlyxXmd3vhZfvtEhAJPK5YDy5wlkzClzu_tiIAmMMV7fQn9LRw6LhJ/exec?action=addUser",
                      headers: {
                        "Content-Type": "application/json",
                        Cookie:
                          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                      },
                      data: data,
                    };
               console.log(data);

                    axios(config231).catch(function (error) {
                   console.log(error);
                    });
                  }
                })
                .catch(function (error) {
               console.log(error);
                });
            })
            .catch(function (error) {
           console.log(error);
            });
          //end here------------------------------------------------------------------------------------------------------------

          //start here Battery-Ticket forward to group
          var config231 = {
            method: "get",
            url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Battery Issues"],"status.keyword":["Open"]}',
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
            },
          };

          // getting data of tickets already posted to group

          var config2321 = {
            method: "get",
            url: "https://script.google.com/macros/s/AKfycbxNepD35Lvwuq4v8TgdkF_-QMNJqT-y683pGse5ZK7hYQdMgSGEpLYElrtS9bS7_fQg/exec?action=getUser",
            headers: {
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
          };

          var data;
          var ticketArray2 = [];

          axios(config231)
            .then(function (response) {
              data = response.data.map((x) => ({
                customFields: x.customFields.map((x) => ({
                  fieldKey: x.fieldKey,
                  value: x.value,
                })),
                CreatedAt: x.createdAt,
                Ticket: x.issueNo,
              }));

              for (let i = 0; i < data.length; i++) {
                ticketArray2.push(data[i].Ticket);
              }
              console.log(
                ticketArray2.length,
                "Total scmapml open tickets Gaadi Malik Issue"
              );
              axios(config2321)
                .then(function (response) {
                  array2 = [];
                  for (var j = 0; j < response.data.length; j++) {
                    array2.push(response.data[j].DATA);
                  }
                  console.log(
                    array2.length,
                    "Total sheet data Gaadi Malik Issue "
                  );
                  var array31 = ticketArray2.filter(function (obj) {
                    return array2.indexOf(obj) == -1;
                  });
                  console.log(
                    array31.length,
                    "Total pending Gaadi Malik Issue"
                  );

                  // console.log(array3)
                  for (let j = 0; j < array31.length; j++) {
                    if (array31.length > 10) {
                      break;
                    }
                    var data = JSON.stringify({
                      DATA: array31[j],
                    });
                    var config2341 = {
                      method: "get",
                      url:
                        'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Battery Issues"],"issueNo.keyword":["' +
                        array31[j] +
                        '"],"status.keyword":["Open"]}',
                      headers: {
                        Authorization:
                          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
                      },
                    };

                    axios(config2341)
                      .then(function (response) {
                        var variData = response.data.map((x) => ({
                          customFields: x.customFields.map((x) => ({
                            fieldKey: x.fieldKey,
                            value: x.value,
                          })),
                        }));
                        var dc1 = variData[0].customFields[3].value || "null";
                        var dc1 = "+91" + dc1.substring(2);
                        // console.log(dc1.substring(2), "Driver Number");

                        var ticket1 = array31[j];

                        var bc1 = variData[0].customFields[1].value || "null";
                        // console.log(bc1, "vehicle no");
                        var cd1 = variData[0].customFields[4].value || "null";
                        // console.log(cd1, "main issue");
                        var de1 = variData[0].customFields[5].value || "null";
                        // console.log(de1, "sub issue");

                        var fg1 = variData[0].customFields[2].value || "null";
                        // console.log(fg1, "vehicle load/empty");
                        var aa1 = variData[0].customFields[7].value || "null";
                        // console.log(aa1, "driver location");
                        var aa5 = variData[0].customFields[8].value || "null";
                        // console.log(aa5, "advacne sub issue");

                        client.sendMessage(
                          "919321704394-1480771870@g.us",
                          " *" +
                            cd1 +
                            "*\n*" +
                            de1 +
                            "* \n📰 " +
                            ticket1 +
                            "\n👨🏼‍🚀DriverNo. " +
                            dc1 +
                            "\n🚚VehicleNo." +
                            bc1 +
                            "\nVehicle Status: " +
                            fg1 +
                            "\n🌎Driver Location: " +
                            aa1 +
                            "\n" +
                            "Problem: Battery :" +
                            aa5 +
                            "\n\n Concerned CRM Team, Please look into it\n\n\n--  *APML Control Room*"
                        );
                      })
                      .catch(function (error) {
                        // console.log(error);
                      });
                    var config231 = {
                      method: "post",
                      url: "https://script.google.com/macros/s/AKfycbxNepD35Lvwuq4v8TgdkF_-QMNJqT-y683pGse5ZK7hYQdMgSGEpLYElrtS9bS7_fQg/exec?action=addUser",
                      headers: {
                        "Content-Type": "application/json",
                        Cookie:
                          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                      },
                      data: data,
                    };
               console.log(data);

                    axios(config231).catch(function (error) {
                 console.log(error);
                    });
                  }
                })
                .catch(function (error) {
              console.log(error);
                });
            })
            .catch(function (error) {
           console.log(error);
            });
          //end here------------------------------------------------------------------------------------------------------------

          //Start2 Adut Hissab Issue

          var config23223 = {
            method: "get",
            url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Hisab Issue"],"status.keyword":["Open"]}',
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
            },
          };

          // getting data of tickets already posted to group

          var config2322 = {
            method: "get",
            url: "https://script.google.com/macros/s/AKfycbwcTUA9i_jy_yhJyA3cw53Eb9sji2qqwev87nW_s-kj0lUp4L5QafwAeDye2d19KgKk/exec?action=getUser",
            headers: {
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
          };

          var data;
          var ticketArray3 = [];

          axios(config23223)
            .then(function (response) {
              data = response.data.map((x) => ({
                customFields: x.customFields.map((x) => ({
                  fieldKey: x.fieldKey,
                  value: x.value,
                })),
                CreatedAt: x.createdAt,
                Ticket: x.issueNo,
              }));

              for (let i = 0; i < data.length; i++) {
                ticketArray3.push(data[i].Ticket);
              }
              console.log(
                ticketArray3.length,
                "Total scmapml open tickets Hisab Issue"
              );
              axios(config2322)
                .then(function (response) {
                  array32 = [];
                  for (var j = 0; j < response.data.length; j++) {
                    array32.push(response.data[j].DATA);
                  }
               console.log(array32.length, "Total sheet data Hisab Issue ");
                  var array32 = ticketArray3.filter(function (obj) {
                    return array32.indexOf(obj) == -1;
                  });
              console.log(array32.length, "Total pending Hisab Issue");

                  // console.log(array3)
                  for (let j = 0; j < array32.length; j++) {
                    if (array32.length > 10) {
                      break;
                    }
                    var data = JSON.stringify({
                      DATA: array32[j],
                    });
                    var config2342 = {
                      method: "get",
                      url:
                        'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Hisab Issue"],"issueNo.keyword":["' +
                        array32[j] +
                        '"],"status.keyword":["Open"]}',
                      headers: {
                        Authorization:
                          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
                      },
                    };

                    axios(config2342)
                      .then(function (response) {
                        var variData = response.data.map((x) => ({
                          customFields: x.customFields.map((x) => ({
                            fieldKey: x.fieldKey,
                            value: x.value,
                          })),
                        }));
                        var dc2 = variData[0].customFields[0].value || "null";
                        var dc2 = "+9" + dc2.substring(1);
                        // console.log(dc2.substring(1), "Driver Number");

                        var ticket2 = array32[j];

                        var bc2 = variData[0].customFields[1].value || "null";
                        // console.log(bc2, "vehicle no");
                        var cd2 = variData[0].customFields[2].value || "null";
                        // console.log(cd2, "main issue");
                        var de2 = variData[0].customFields[3].value || "null";
                        // console.log(de2, "sub issue");
                        var de3 = variData[0].customFields[4].value || "null";
                        // console.log(de3, "status");
                        var de4 = variData[0].customFields[5].value || "null";
                        // console.log(de4, "location");

                        // var fg2=variData[0].customFields[6].value||'null'
                        console.log(fg2,"vehicle load/empty")
                        // var aa2=variData[0].customFields[7].value||'null'
                        console.log(aa2,"driver location")

                        client.sendMessage(
                          "919623122653-1607081889@g.us",
                          " *" +
                            cd2 +
                            "*\n*" +
                            de2 +
                            "* \n📰 " +
                            ticket2 +
                            "\n👨🏼‍🚀DriverNo. " +
                            dc2 +
                            "\n🚚VehicleNo." +
                            bc2 +
                            "\nVehicle Status: " +
                            de3 +
                            "\n🌎Driver Location: " +
                            de4 +
                            "\n\n Concerned Audit Team Member, Please look into it\n\n\n--  *APML Control Room*"
                        );
                      })
                      .catch(function (error) {
                        // console.log(error);
                      });
                    var config23225 = {
                      method: "post",
                      url: "https://script.google.com/macros/s/AKfycbwcTUA9i_jy_yhJyA3cw53Eb9sji2qqwev87nW_s-kj0lUp4L5QafwAeDye2d19KgKk/exec?action=addUser",
                      headers: {
                        "Content-Type": "application/json",
                        Cookie:
                          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                      },
                      data: data,
                    };
                    // console.log(data);

                    axios(config23225).catch(function (error) {
                      // console.log(error);
                    });
                  }
                })
                .catch(function (error) {
                  // console.log(error);
                });
            })
            .catch(function (error) {
              // console.log(error);
            });

          //end2------------------------------------------------------------------------------------------------------------------------

          //start3 Call Desk Issues

          var config232234 = {
            method: "get",
            url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Driver Issue"],"status.keyword":["Open"]}',
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
            },
          };

          // getting data of tickets already posted to group

          var config23224 = {
            method: "get",
            url: "https://script.google.com/macros/s/AKfycbx_Z6Bl1bONh30dCG6GhImYeMq7fm9uhDEhIp7jXcbukb6-P3y7wQQ3CZa1p3znAyiz/exec?action=getUser",
            headers: {
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
          };

          var data;
          var ticketArray4 = [];

          axios(config232234)
            .then(function (response) {
              data = response.data.map((x) => ({
                customFields: x.customFields.map((x) => ({
                  fieldKey: x.fieldKey,
                  value: x.value,
                })),
                CreatedAt: x.createdAt,
                Ticket: x.issueNo,
              }));

              for (let i = 0; i < data.length; i++) {
                ticketArray4.push(data[i].Ticket);
              }
              console.log(
                ticketArray4.length,
                "Total scmapml open tickets Driver Issue"
              );
              axios(config23224)
                .then(function (response) {
                  array324 = [];
                  for (var j = 0; j < response.data.length; j++) {
                    array324.push(response.data[j].DATA);
                  }
                  console.log(
                    array324.length,
                    "Total sheet data Driver Issue "
                  );
                  var array324 = ticketArray4.filter(function (obj) {
                    return array324.indexOf(obj) == -1;
                  });
             console.log(array324.length, "Total pending Driver Issue");

                  // console.log(array3)
                  for (let j = 0; j < array324.length; j++) {
                    if (array324.length > 110) {
                      break;
                    }
                    var data = JSON.stringify({
                      DATA: array324[j],
                    });
                    var config23424 = {
                      method: "get",
                      url:
                        'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Driver Issue"],"issueNo.keyword":["' +
                        array324[j] +
                        '"],"status.keyword":["Open"]}',
                      headers: {
                        Authorization:
                          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
                      },
                    };

                    axios(config23424)
                      .then(function (response) {
                        var variData = response.data.map((x) => ({
                          customFields: x.customFields.map((x) => ({
                            fieldKey: x.fieldKey,
                            value: x.value,
                          })),
                        }));
                        var dc4 = variData[0].customFields[2].value || "null";
                        var dc4 = "+9" + dc4.substring(1);
                      console.log(dc4.substring(1), "Driver Number");

                        var ticket4 = array324[j];

                        var bc4 = variData[0].customFields[3].value || "null";
                       console.log(bc4, "vehicle no");
                        var cd4 = variData[0].customFields[4].value || "null";
                        console.log(cd4, "main issue");
                        var de4 = variData[0].customFields[5].value || "null";
                       console.log(de4, "sub issue");
                        var de8 = variData[0].customFields[6].value || "null";
                       console.log(de8, "status");
                        var de7 = variData[0].customFields[7].value || "null";
                      console.log(de7, "location");

                      var fg2=variData[0].customFields[6].value||'null'
                        console.log(fg2,"vehicle load/empty")
                      var aa2=variData[0].customFields[7].value||'null'
                        console.log(aa2,"driver location")

                        if (de4.includes("Tyre")) {
                          client.sendMessage(
                            "918178562171-1616845470@g.us",
                            " *" +
                              cd4 +
                              "*\n*" +
                              de4 +
                              "* \n📰 " +
                              ticket4 +
                              "\n👨🏼‍🚀DriverNo. " +
                              dc4 +
                              "\n🚚VehicleNo." +
                              bc4 +
                              "\nVehicle Status: " +
                              de8 +
                              "\n🌎Driver Location: " +
                              de7 +
                              "\n\n Concerned crm Team Member, Please look into it\n\n\n--  *APML Control Room*"
                          );
                        } else {
                          client.sendMessage(
                            "919321704394-1480771870@g.us",
                            " *" +
                              cd4 +
                              "*\n*" +
                              de4 +
                              "* \n📰 " +
                              ticket4 +
                              "\n👨🏼‍🚀DriverNo. " +
                              dc4 +
                              "\n🚚VehicleNo." +
                              bc4 +
                              "\nVehicle Status: " +
                              de8 +
                              "\n🌎Driver Location: " +
                              de7 +
                              "\n\n Concerned crm Team Member, Please look into it\n\n\n--  *APML Control Room*"
                          );
                        }
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                    var config232254 = {
                      method: "post",
                      url: "https://script.google.com/macros/s/AKfycbx_Z6Bl1bONh30dCG6GhImYeMq7fm9uhDEhIp7jXcbukb6-P3y7wQQ3CZa1p3znAyiz/exec?action=addUser",
                      headers: {
                        "Content-Type": "application/json",
                        Cookie:
                          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                      },
                      data: data,
                    };
                    // console.log(data);

                    axios(config232254).catch(function (error) {
                      // console.log(error);
                    });
                  }
                })
                .catch(function (error) {
                  // console.log(error);
                });
            })
            .catch(function (error) {
              // console.log(error);
            });

          //end3----------------------------------------------------------------------------------------------------------

          //START CLAIMS Intimation
          var configclaim = {
            method: "get",
            url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Claim Intimation"],"status.keyword":["Open"]}',
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
            },
          };

          // getting data of tickets already posted to group

          var configclaim2 = {
            method: "get",
            url: "https://script.google.com/macros/s/AKfycbw94h98LGdE2Gq99842aFlqUbedJicoi0p0prGKnXbx7wZ98XKQCIiix2yqc3AXYPmQcA/exec?action=getUser",
            headers: {
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
          };

          var data;
          var ticketArrayclaim = [];

          axios(configclaim)
            .then(function (response) {
              data = response.data.map((x) => ({
                customFields: x.customFields.map((x) => ({
                  fieldKey: x.fieldKey,
                  value: x.value,
                })),
                CreatedAt: x.createdAt,
                Ticket: x.issueNo,
              }));

              for (let i = 0; i < data.length; i++) {
                ticketArrayclaim.push(data[i].Ticket);
              }
              console.log(
                ticketArrayclaim.length,
                "Total scmapml open tickets Claim Intimation"
              );
              axios(configclaim2)
                .then(function (response) {
                  arrayclaim = [];
                  for (var j = 0; j < response.data.length; j++) {
                    arrayclaim.push(response.data[j].DATA);
                  }
                  console.log(
                    arrayclaim.length,
                    "Total sheet data  Claim Intimation"
                  );
                  var arrayclaim = ticketArrayclaim.filter(function (obj) {
                    return arrayclaim.indexOf(obj) == -1;
                  });
                  console.log(
                    arrayclaim.length,
                    "Total pending Claim Intimation"
                  );

                  // console.log(array3)
                  for (let j = 0; j < arrayclaim.length; j++) {
                    if (arrayclaim.length > 10) {
                      break;
                    }
                    var data = JSON.stringify({
                      DATA: arrayclaim[j],
                    });
                    var configclaim3 = {
                      method: "get",
                      url:
                        'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Claim Intimation"],"issueNo.keyword":["' +
                        arrayclaim[j] +
                        '"],"status.keyword":["Open"]}',
                      headers: {
                        Authorization:
                          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
                      },
                    };

                    axios(configclaim3)
                      .then(function (response) {
                        var variData = response.data.map((x) => ({
                          customFields: x.customFields.map((x) => ({
                            fieldKey: x.fieldKey,
                            value: x.value,
                          })),
                        }));

                        var ticket2 = arrayclaim[j];

                        var bc2 = variData[0].customFields[1].value || "null";
                        // console.log(bc2, "GC no");
                        var cd2 = variData[0].customFields[2].value || "null";
                        // console.log(cd2, "GC Date");
                        var de2 = variData[0].customFields[3].value || "null";
                        // console.log(de2, "Survey By");
                        var de3 = variData[0].customFields[5].value || "null";
                        // console.log(de3, "Loss Location");
                        var de4 = variData[0].customFields[9].value || "null";
                        // console.log(de4, "Estimated Claim amount");

                        client.sendMessage(
                          "120363044717330825@g.us",
                          " *" +
                            "Claim Intimation" +
                            "*\n" +
                            " \n📰 " +
                            ticket2 +
                            "\nGC Number :" +
                            bc2 +
                            "\nSurvey By: " +
                            de2 +
                            "\n🌎Loss Location: " +
                            de3 +
                            "\nEstimated Loss Amount: " +
                            de4 +
                            "\n\n Concerned Claim Team , Please look into it\n\n\n--  *APML*"
                        );
                      })
                      .catch(function (error) {
                  console.log(error);
                      });
                    var configclaim4 = {
                      method: "post",
                      url: "https://script.google.com/macros/s/AKfycbw94h98LGdE2Gq99842aFlqUbedJicoi0p0prGKnXbx7wZ98XKQCIiix2yqc3AXYPmQcA/exec?action=addUser",
                      headers: {
                        "Content-Type": "application/json",
                        Cookie:
                          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                      },
                      data: data,
                    };
                   console.log(data);

                    axios(configclaim4).catch(function (error) {
                   console.log(error);
                    });
                  }
                })
                .catch(function (error) {
               console.log(error);
                });
            })
            .catch(function (error) {
       console.log(error);
            });

          //END CLAIMS------------------------------------------------------------------------------------------------------------------------------
        })
        .catch(function (error) {
      console.log(error);
        });
    }
  }, 60000);

  //end here ---------------------------------------------------------------------------------------------------------------

  // Starts Here Call Desk Pending Classes Forward

  setInterval(function () {
    // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() > 25) {
      // Check the time

      var configaaa = {
        method: "get",
        url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Driver Issue"],"status.keyword":["Open"]}',
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      const ticketArray99 = [];

      axios(configaaa).then(function (response) {
        data = response.data;

        for (let i = 0; i < data.length; i++) {
          ticketArray99.push(data[i].issueNo);
        }

        const a = (ticketArray99.length - 5).toString();

        client.sendMessage(
          "919321704394-1480771870@g.us",
          "APML Control Room \nTotal Open Matters\nDriver Issue Bot\n*" +
            a +
            "* Matters\n\n Dear team please close matters ASAP!!"
        );
      });

      var config2 = {
        method: "get",
        url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Gaadi Malik Issue"],"status.keyword":["Open"]}',
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      const ticketArray2 = [];

      axios(config2).then(function (response) {
        data = response.data;

        for (let i = 0; i < data.length; i++) {
          ticketArray2.push(data[i].issueNo);
        }

        const b = ticketArray2.length.toString();

        client.sendMessage(
          "120363045648565871@g.us",
          "APML Control Room \nTotal Open Matters\nGaadi Malik Bot\n*" +
            b +
            "* Matters\n\n Dear team please close matters ASAP!!"
        );
      });

      var config3 = {
        method: "get",
        url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Tyre Puncture Bot"],"status.keyword":["Open"]}',
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      const ticketArray3 = [];

      axios(config3).then(function (response) {
        data = response.data;

        for (let i = 0; i < data.length; i++) {
          ticketArray3.push(data[i].issueNo);
        }

        const c = ticketArray3.length.toString();

        client.sendMessage(
          "918178562171-1616845470@g.us",
          "APML Control Room \nTotal Open Matters\nTyre Puncture Bot\n*" +
            c +
            "* Matters\n\n Dear team please close matters ASAP!!"
        );
      });

      var config5 = {
        method: "get",
        url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Hisab Issue"],"status.keyword":["Open"]}',
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w",
        },
      };

      const ticketArray5 = [];

      axios(config5).then(function (response) {
        data = response.data;

        for (let i = 0; i < data.length; i++) {
          ticketArray5.push(data[i].issueNo);
        }

        const e = ticketArray5.length.toString();

        client.sendMessage(
          "919623122653-1607081889@g.us",
          "APML Control Room \nTotal Open Matters\nHisab Issue Bot\n*" +
            e +
            "* Matters\n\n Dear team please close matters ASAP!!"
        );
      });
    }
  }, 60000);

  //  ENDS HERE----------------------------------------------------------------------------------------------------
  // Starts Here field officer Reports

  setInterval(function () {
    // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 18 && date.getMinutes() === 50) {
      // Check the time

      var configJK = {
        method: "get",
        url: "https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser",
        headers: {
          Cookie:
            "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
        },
      };

      axios(configJK).then(function (response) {
        var d = new Date();
        var reportdate =
          String(response.data[72].Gaadi_Malik) +
          "\n" +
          String(response.data[73].Gaadi_Malik) +
          "\n\n";

        var reportdate1 =
          String(response.data[110].Gaadi_Malik) +
          "\n" +
          String(response.data[111].Gaadi_Malik) +
          "\n\n";
        var reportdate2 =
          String(response.data[139].Gaadi_Malik) +
          "\n" +
          String(response.data[140].Gaadi_Malik) +
          "\n\n";
        var reportdate3 =
          String(response.data[168].Gaadi_Malik) +
          "\n" +
          String(response.data[169].Gaadi_Malik) +
          "\n\n";

        var WCROVISIT = "";

        for (var i = 74; i <= 97; i++) {
          if (response.data[i].Gaadi_Malik.length > 5) {
            WCROVISIT += String(response.data[i].Gaadi_Malik) + "\n";
            // console.log(response.data[i].Gaadi_Malik.length, "sss");
          }
        }
        //client.sendMessage("919599123075-1613143798@g.us" ,reportdate+"\n----------------------------------------"+"\n *WCRO RATIO WISE APML VISITS REPORT* \n"+WCROVISIT+"\n----------------------------------------\n")

        //client.sendMessage("918882011952-1501916853@g.us" ,reportdate+"\n----------------------------------------"+"\n *WCRO RATIO WISE APML VISITS REPORT* \n"+WCROVISIT+"\n----------------------------------------\n")
        // client.sendMessage("120363043814281535@g.us" ,reportdate+"\n----------------------------------------"+"\n *WCRO RATIO WISE APML VISITS REPORT* \n"+WCROVISIT+"\n----------------------------------------\n")

        var SROVISIT = "";

        for (var i = 112; i <= 128; i++) {
          if (response.data[i].Gaadi_Malik.length > 5) {
            SROVISIT += String(response.data[i].Gaadi_Malik) + "\n";
            // console.log(response.data[i].Gaadi_Malik.length, "sss");
          }
        }
        // client.sendMessage("919599123075-1613143798@g.us" ,reportdate1+"\n----------------------------------------"+"\n *SRO RATIO WISE APML VISITS REPORT* \n"+SROVISIT+"\n----------------------------------------\n")

        //client.sendMessage("918882011952-1501916853@g.us" ,reportdate1+"\n----------------------------------------"+"\n *SRO RATIO WISE APML VISITS REPORT* \n"+SROVISIT+"\n----------------------------------------\n")
        //    client.sendMessage("120363043814281535@g.us" ,reportdate1+"\n----------------------------------------"+"\n *SRO RATIO WISE APML VISITS REPORT* \n"+SROVISIT+"\n----------------------------------------\n")

        var NROVISIT = "";

        for (var i = 141; i <= 158; i++) {
          if (response.data[i].Gaadi_Malik.length > 5) {
            NROVISIT += String(response.data[i].Gaadi_Malik) + "\n";
            // console.log(response.data[i].Gaadi_Malik.length, "sss");
          }
        }
        // client.sendMessage("919599123075-1613143798@g.us" ,reportdate2+"\n----------------------------------------"+"\n *NRO RATIO WISE APML VISITS REPORT* \n"+NROVISIT+"\n----------------------------------------\n")

        //  client.sendMessage("918882011952-1501916853@g.us" ,reportdate2+"\n----------------------------------------"+"\n *NRO RATIO WISE APML VISITS REPORT* \n"+NROVISIT+"\n----------------------------------------\n")

        //client.sendMessage("120363043814281535@g.us" ,reportdate2+"\n----------------------------------------"+"\n *NRO RATIO WISE APML VISITS REPORT* \n"+NROVISIT+"\n----------------------------------------\n")

        var EROVISIT = "";

        for (var i = 170; i <= 184; i++) {
          if (response.data[i].Gaadi_Malik.length > 5) {
            EROVISIT += String(response.data[i].Gaadi_Malik) + "\n";
            // console.log(response.data[i].Gaadi_Malik.length, "sss");
          }
        }
        // client.sendMessage("919599123075-1613143798@g.us" ,reportdate3+"\n----------------------------------------"+"\n *ERO RATIO WISE APML VISITS REPORT* \n"+EROVISIT+"\n----------------------------------------\n")

        //client.sendMessage("918882011952-1501916853@g.us" ,reportdate3+"\n----------------------------------------"+"\n *ERO RATIO WISE APML VISITS REPORT* \n"+EROVISIT+"\n----------------------------------------\n")
        // client.sendMessage("120363043814281535@g.us" ,reportdate3+"\n----------------------------------------"+"\n *ERO RATIO WISE APML VISITS REPORT* \n"+EROVISIT+"\n----------------------------------------\n")
 
        // client.sendMessage("120363043814281535@g.us" ,reportdate+"\n----------------------------------------"+"\n *PAN INDIA VISITS-TARGET REPORT* \n"+TARGETREPORT+"\n----------------------------------------\n")
      });
    }
  }, 60000);
// Set interval for checking every 18000000 milliseconds (5 hours)
setInterval(function () {
  // Create a Date object to find out what time it is
  const date = new Date();

  // Check if it is within a 24 hour period (midnight to midnight)
  if ( (date.getHours() === 07 && date.getMinutes() === 45) ) {
    // Make a GET request to the Google Sheets API to retrieve data
    axios({
      method: 'get',
      url: 'https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser',
      headers: {
        Cookie: 'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA',
      },
    }).then((response) => {
      // Initialize a string to store the report of pending cases
      let pendingReport = '';

      // Loop through the data and add the gaadi_malik (vehicle owner) to the report if the length is greater than 5
      for (let i = 1198; i <= 1398; i++) {
        if (response.data[i].Gaadi_Malik.length > 5) {
          pendingReport += `${response.data[i].Gaadi_Malik}\n`;
        }
      }

      // Get the total number of pending cases from the data
      const totalPending = response.data[1197].Gaadi_Malik;

      // Send the report to the designated WhatsApp number
      client.sendMessage(
        '918882011952-1501916853@g.us',
        `\n----------------------------------------
 *FIELD OFFICER VISITS REPORT* \n Acheivement vs Target till date \n\n ⚠️ = Zero Visits \n 🔴 = Below Target \n 🟢 = Above Target\n ----------------------------------------\n ${totalPending}
${pendingReport}  \n
----------------------------------------\n`,
      );
    });
  }
}, 60000);
  //end here ----------------------------------------------------------------------------

  // Starts Here JK-PENDING Reports

  // setInterval(function(){ // Set interval for checking
  //   var date = new Date(); // Create a Date object to find out what time it is
  //   if(date.getHours() === 08 && date.getMinutes() === 00){ // Check the time

  //   var configJK = {
  //     method: 'get',
  //     url: 'https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser',
  //     headers: {
  //       'Cookie': 'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA'
  //     }
  //   };

  //   axios(configJK)
  //   .then(function (response) {
  //     var d = new Date();
      // var reportdate = d.toLocaleDateString();console.log(reportdate);

  //     arrayJK=[]

  //     JKNOCPKM= String(response.data[33].Gaadi_Malik)+"-"+String(response.data[33].Above40000)+"\n"+String(response.data[34].Gaadi_Malik)+"-"+String(response.data[34].Above40000)+"\n"+String(response.data[35].Gaadi_Malik)+"-"+String(response.data[35].Above40000)+"\n"+String(response.data[36].Gaadi_Malik)+"-"+String(response.data[36].Above40000)+"\n"+String(response.data[37].Gaadi_Malik)+"-"+String(response.data[37].Above40000)+"\n"+String(response.data[38].Gaadi_Malik)+"-"+String(response.data[38].Above40000)+"\n"+String(response.data[39].Gaadi_Malik)+"-"+String(response.data[39].Above40000)+"\n"+String(response.data[40].Gaadi_Malik)+"-"+String(response.data[40].Above40000)+"\n"+String(response.data[41].Gaadi_Malik)+"-"+String(response.data[41].Above40000)+"\n"+String(response.data[42].Gaadi_Malik)+"-"+String(response.data[42].Above40000)+"\n"

  //     JK40000= String(response.data[0].Gaadi_Malik)+"-"+String(response.data[0].Above40000)+"\n"+String(response.data[1].Gaadi_Malik)+"-"+String(response.data[1].Above40000)+"\n"+String(response.data[2].Gaadi_Malik)+"-"+String(response.data[2].Above40000)+"\n"+String(response.data[3].Gaadi_Malik)+"-"+String(response.data[3].Above40000)+"\n"+String(response.data[4].Gaadi_Malik)+"-"+String(response.data[4].Above40000)+"\n"+String(response.data[5].Gaadi_Malik)+"-"+String(response.data[5].Above40000)+"\n"+String(response.data[6].Gaadi_Malik)+"-"+String(response.data[6].Above40000)+"\n"+String(response.data[7].Gaadi_Malik)+"-"+String(response.data[7].Above40000)+"\n"+String(response.data[8].Gaadi_Malik)+"-"+String(response.data[8].Above40000)+"\n"

  //     JKNOINSP=  String(response.data[11].Gaadi_Malik)+"-"+String(response.data[11].Above40000)+"\n"+String(response.data[12].Gaadi_Malik)+"-"+String(response.data[12].Above40000)+"\n"+String(response.data[13].Gaadi_Malik)+"-"+String(response.data[13].Above40000)+"\n"+String(response.data[14].Gaadi_Malik)+"-"+String(response.data[14].Above40000)+"\n"+String(response.data[15].Gaadi_Malik)+"-"+String(response.data[15].Above40000)+"\n"+String(response.data[16].Gaadi_Malik)+"-"+String(response.data[16].Above40000)+"\n"+String(response.data[17].Gaadi_Malik)+"-"+String(response.data[17].Above40000)+"\n"+String(response.data[18].Gaadi_Malik)+"-"+String(response.data[18].Above40000)+"\n"+String(response.data[19].Gaadi_Malik)+"-"+String(response.data[19].Above40000)+"\n"

  //     JKABV60=  String(response.data[22].Gaadi_Malik)+"-"+String(response.data[22].Above40000)+"\n"+String(response.data[23].Gaadi_Malik)+"-"+String(response.data[23].Above40000)+"\n"+String(response.data[24].Gaadi_Malik)+"-"+String(response.data[24].Above40000)+"\n"+String(response.data[25].Gaadi_Malik)+"-"+String(response.data[25].Above40000)+"\n"+String(response.data[26].Gaadi_Malik)+"-"+String(response.data[26].Above40000)+"\n"+String(response.data[27].Gaadi_Malik)+"-"+String(response.data[27].Above40000)+"\n"+String(response.data[28].Gaadi_Malik)+"-"+String(response.data[28].Above40000)+"\n"+String(response.data[29].Gaadi_Malik)+"-"+String(response.data[29].Above40000)+"\n"+String(response.data[30].Gaadi_Malik)+"-"+String(response.data[30].Above40000)+"\n"

  //     client.sendMessage("918178562171-1616845470@g.us" ,reportdate+"\n----------------------------------------"+"\n🚨 *ENROLLMENT PENDING* 🚨 *"+String(response.data[43].Above40000)+"\n----------------------------------------\n"+JKNOCPKM+"*\n----------------------------------------\n"+"\n🚨 *TYRE INSPECTION* 🚨\n----------------------------------------"+"\n ⚠️ *NO INSPECTION -"+String(response.data[20].Above40000)+"\n"+JKNOINSP+"\n ⚠️ *OBV 60 DAYS NO INSP -"+String(response.data[31].Above40000)+" \n"+JKABV60);
  //     }

  //       );

  //     }
  //   }, 60000);

  //end here ----------------------------------------------------------------------------
});

// client.on("message", (message) => {
//   if (message.body.includes("qwertygo")) {
//     var driverMobileNos = [];
//     var vehiclenumber = [];
//     var FetchGsheetDriver = {
//       method: "get",
//       url: "https://script.google.com/macros/s/AKfycbz7deBD2-Inoe2bEZshQl_GzoP_3kM94jnELpO2x37fEYLGZ8AgNgB-WskaKaYMmOoF2A/exec",
//       headers: {
//         Cookie:
//           "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
//       },
//     };
//     axios(FetchGsheetDriver)
//       .then(function (response) {
//         const { MessageMedia } = require("whatsapp-web.js");

//         const media1 = MessageMedia.fromFilePath("1.mp4");
//         //  for (let i = 0; i < response.data.data.length; i++) {

//         //   client.sendMessage( "91"+response.data.data[i][1]+"@c.us" ,media1);
//         //   client.sendMessage( "91"+response.data.data[i][1]+"@c.us" ,"*🚨APML कंट्रोल रूम -Safety🚨*\nअपनी सुरक्षा अपने हाथ, तभी सुरक्षा रहेगी आपके सभी के साथ।  \n\n तभी तो बनेगा बेहतर हर दिन, जब बर्तोगे सुरक्षा हर दिन।");
//            console.log(response.data.data[i][1],"sent")
//         //   }
//         //counting no. of drivers
//       })
//       .catch(function (error) {
//         // console.log(error);
//       });
//     // console.log("all driver updated");

//     // client.sendMessage("120363045648565871@g.us" ,"Today message to all driver \n *🚨APML कंट्रोल रूम 🚨*\n\nअपनी सुरक्षा अपने हाथ, तभी सुरक्षा रहेगी आपके सभी के साथ।  \n\n तभी तो बनेगा बेहतर हर दिन, जब बर्तोगे सुरक्षा हर दिन।");

//     // client.sendMessage("120363045648565871@g.us" ,media1);
//     // client.sendMessage("919321704394-1480771870@g.us" ,"Today message to all driver on Safety \n *🚨APML कंट्रोल रूम 🚨*\n\nअपनी सुरक्षा अपने हाथ, तभी सुरक्षा रहेगी आपके सभी के साथ।  \n\n तभी तो बनेगा बेहतर हर दिन, जब बर्तोगे सुरक्षा हर दिन।");

//     // client.sendMessage("919321704394-1480771870@g.us" ,media1);
//     // client.sendMessage("919310988725-1466780613@g.us" ,"Today message to all driver on Safety\n *🚨APML कंट्रोल रूम 🚨*\n\nअपनी सुरक्षा अपने हाथ, तभी सुरक्षा रहेगी आपके सभी के साथ।  \n\n तभी तो बनेगा बेहतर हर दिन, जब बर्तोगे सुरक्षा हर दिन।");

//     // client.sendMessage("919310988725-1466780613@g.us" ,media1);
//   }
// });

client.on("message", (message) => {
  if (message.body.includes("zz")) {
    data = JSON.stringify({ DATA: message.body });

    var configveh = {
      method: "post",
      url: "https://script.google.com/macros/s/AKfycbxgIZQPcpOJ1-IaqCic7Qp4BFVhGP-6UlvEUuZ_aYA0mG2NZYm8dsM9nqc9GmlyTUFL/exec?action=addUser",
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
      },
      data: data,
    };
    // console.log(data);

    axios(configveh);
    client.sendMessage("120363043814281535@g.us", message.body + "zz");
  }
  if (message.body.includes("SHPL-ORDER-RECIEVED")) {
    client.sendMessage("919311234325-1627622790@g.us", message.body);
  } else client.sendMessage("120363043814281535@g.us", message.body);
});

//field officer visit starts here
const CustomerSession = new Map();
const fouser = [];
//Defining Variable- Fetching data from field officer Master GoogleSheet (Vehicle number,Driver number) & storing in array
var fieldofficerMobile = [];

var FetchGsheetDriver = {
  method: "get",
  url: "https://script.google.com/macros/s/AKfycbz8ixzZAOjAwJnODBWycpfoB8M7J4fauOcDLbE_-0oa_9UXSIT5Kbag1df1BkfOhHCDpQ/exec",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
  axios(FetchGsheetDriver)
    .then(function (response) {
        fieldofficerMobile.splice(0, fieldofficerMobile.length);
      fouser.splice(0, fouser.length);
      for (let i = 0; i < response.data.data.length; i++) {
        fieldofficerMobile.push(response.data.data[i][0].toString());
        fouser.push(response.data.data[i][8].toString());
      }
      //counting no. of drivers
      numberofdriver = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
  // console.log("driver updated");
 console.log(fieldofficerMobile,"AAAAAAAAAAAAAAA");
 console.log(fouser,"BBBBBBBBBBBBBB");

}, 60000);

client.on("message", async (msg) => {
  console.log("MESSAGE RECEIVED", msg);

  let incomingMessage = msg;

  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  result = JSON.stringify(msg);
  result = result.split('"notifyName":"')[1];

  // console.log(String(recipientName));

  let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
  let message_id = incomingMessage.id; // extract the message id
  let timestamp = incomingMessage.timestamp;

  if (!CustomerSession.get(recipientPhone)) {
    CustomerSession.set(recipientPhone, {
      cart: [],
    });
  }

  //Matching Whatsapp cloud api number with Driver Master googlesheet number and storing its Index Velue in variable

  var indexof = fieldofficerMobile.indexOf(
    String(recipientPhone).substring(2, 12)
  );

  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = CustomerSession.get(recipientPhone).cart;

    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;

  let addToDriverBotCart = async ({ data, value, recipientPhone }) => {
    if (value == "text") {
      CustomerSession.get(recipientPhone).cart.push({ text: data });
    }
    if (value == "text1") {
      CustomerSession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "NAME") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "LOCATION") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "image") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "personname") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "persondesignation") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "personcontact") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "personemail") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "personaddress") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "storagemonth") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    } else if (value == "inqcfr") {
      CustomerSession.get(recipientPhone).cart.push({ data });
    }
  };

  var TF99 = false;
  TF99 = fieldofficerMobile.includes(String(recipientPhone).substring(2, 12));
  if (TF99) {
    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "APML") {
        // console.log(String(recipientPhone).substring(2, 12));
        CustomerSession.get(recipientPhone).cart = [];
        // console.log(recipientName);

        let data;

        for (let i = 0; i < fieldofficerMobile.length; i++) {
          if (fieldofficerMobile[i] === String(recipientPhone).substring(2, 12)) {
            data = fouser[i];
            break;
          }
        }
        
          let value = "text";
        console.log(data,"SADSADSADSAD"); 
                await addToDriverBotCart({ data, value, recipientPhone });
                let numberOfIssuesInCart = listOfIssuesInCart({
                  recipientPhone,
                }).count;
  
       
     

 
        await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/4Nt5vm7/APML-Logo.png"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind 🇮🇳🇮🇳🇮🇳, \n\n⚠️ *Visit Notice*  ⚠️\nTarget to do 3 visits per day !!!\n\n-------------------------------------------------------\n *Sales pitch structure*  📰\n1.⏰Reach out at the right time and connect with the right person !!!\n2.🌟Make the customer the hero of your story!!!\n3.🤔Understand the customer.s needs, and personalise the solution !!!\n4.⌛Keep the pitch length in mind !!!\n5.🌈  Get creative\nhttps://www.youtube.com/watch?v=KJe7yDTEDTU\n\n \n-------------------------------------------------------\n   *TYPE COMPANY/BANK NAME🏦*\n-------------------------------------------------------\n"
        );

        // console.log(CustomerSession.get(recipientPhone).cart[0].text);
      }
      if (incomingMessage.body.toUpperCase() === "HOME") {
        // console.log(String(recipientPhone).substring(2, 12));
        CustomerSession.get(recipientPhone).cart = [];

        let data = incomingMessage.body.toUpperCase();

        let value = "text1";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/4Nt5vm7/APML-Logo.png"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind 🇮🇳🇮🇳🇮🇳, \n\n⚠️ *Visit Notice*  ⚠️\n-------------------------------------------------------\n *Sales pitch structure*  📰\n1.⏰Reach out at the right time and connect with the right person !!!\n2.🌟Make the customer the hero of your story!!!\n3.🤔Understand the customer.s needs, and personalise the solution !!!\n4.⌛Keep the pitch length in mind !!!\n5.🌈  Get creative\nhttps://www.youtube.com/watch?v=KJe7yDTEDTU\n\n \n-------------------------------------------------------\n   *Type Inquiry No/ Quotation No/ CFR No*\n-------------------------------------------------------\n"
        );

        // console.log(CustomerSession.get(recipientPhone).cart[0].text);
      }

      if (incomingMessage.body.toUpperCase().includes("APML?")) {
        var command = incomingMessage.body.slice(10);
        // console.log(command);
        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
          apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
        async function gpt() {
          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: command,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          await client.sendMessage(
            recipientPhone,
            response.data.choices[0].text
          );
        }
        gpt();
      } else if (
        numberOfIssuesInCart === 1 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "NAME";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send contacted person name*\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 2 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "personname";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send person contact number*\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 3 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "persondesignation";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send person designation*\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 4 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "personcontact";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send person email id*\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 5 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "personemail";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/gjLkSfG/location-png.png"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send your current location🌏🌏🌏*\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 1 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text1 != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "inqcfr";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send contacted person address *\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 2 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text1 != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "personaddress";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Send Storage Required Duration*\n-------------------------------------------------------\n"
        );
      } else if (
        numberOfIssuesInCart === 3 &&
        msg.type === "chat" &&
        CustomerSession.get(recipientPhone).cart[0].text1 != null
      ) {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "storagemonth";
        await addToDriverBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Thank you for sharing the lead... Our Concern Person Ms. Abhilasha will coordinate with client shortly.*\n\n\nFor further query kindly call back on this Mobile Number- 9289144932 Email ID:- wcro.hsdelivery@agarwalpackers.com \n-------------------------------------------------------\n"
        );
        let issues = CustomerSession.get(recipientPhone).cart;
        // console.log(issues);
        var date = new Date();
                var options = {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false
                };
                var dateString = date.toLocaleString('en-GB', options);
        var dataz = JSON.stringify({
          datetime: dateString.replace(', ', ' ') ,
          inqcfr: JSON.stringify(Object.values(issues[1])).slice(2, -2),
          personaddress: JSON.stringify(Object.values(issues[2])).slice(2, -2),
          storagemonth: JSON.stringify(Object.values(issues[3])).slice(2, -2),

          key: String(recipientPhone).substring(2, 12),
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbzFIO41FtT_6VRd4OZ1xeibmbYkxIrWTPowSjjlqZI5gEB-eTrPHc5luvTsfurLBNp3IQ/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            let issues = CustomerSession.get(recipientPhone).cart;
            var dataforward =
              new Date().toLocaleString() +
              "\n" +
              "INQ/CFR :" +
              JSON.stringify(Object.values(issues[1])).slice(2, -2) +
              "\n" +
              "personaddress :" +
              JSON.stringify(Object.values(issues[2])).slice(2, -2) +
              "\n" +
              "storagemonth :" +
              JSON.stringify(Object.values(issues[3])).slice(2, -6) +
              "xxxx" +
              "\n" +
              "Fieldofficer :" +
              JSON.stringify(Object.values(issues[0])) ;

            // console.log(dataz, "ooooo");

            client.sendMessage("120363043814281535@g.us", dataforward);
            // do something with the media data here
          })
          .catch(function (error) {
            // console.log(error);
          });
      }
    } else if (
      numberOfIssuesInCart === 6 &&
      msg.type === "location" &&
      CustomerSession.get(recipientPhone).cart[0].text != null
    ) {
      // console.log(String(recipientPhone).substring(2, 12));

      let data = incomingMessage.location.latitude;
      let data2 = incomingMessage.location.longitude;

      data = data + "," + data2;

      let value = "LOCATION";
      await addToDriverBotCart({ data, value, recipientPhone });

      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      // await console.log(data);
      const { MessageMedia } = require("whatsapp-web.js");
      const media = await MessageMedia.fromUrl(
        "https://i.ibb.co/KLJY8Wd/aaa.jpg"
      );
      await client.sendMessage(recipientPhone, media);
      await client.sendMessage(
        recipientPhone,
        " \n-------------------------------------------------------\n   *Send a photo with manager*\n-------------------------------------------------------\n"
      );
    } else if (
      numberOfIssuesInCart === 7 &&
      msg.type == "image" &&
      CustomerSession.get(recipientPhone).cart[0].text != null
    ) {
      const media = await msg.downloadMedia();  // idhar error hai 
      // await console.log(media.mimetype, media.filename, media.data.length);
      const imageDataURI = require("image-data-uri");
      const imageFileName = "new_image";
      const fs = require("fs");
      var imgname = "apmlvisits" + Math.floor(100000 + Math.random() * 900000);

      const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
      await fs.writeFileSync("abc" + ".txt", datauri);
      await imageDataURI.outputFile(datauri, imgname + ".jpeg");

      var axios = require("axios");
      var FormData = require("form-data");

      var dataz = new FormData();
      dataz.append(
        "file",
        fs.createReadStream(
          "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
            imgname +
            ".jpeg"
        )
      );


      var config = {
        method: "post",
        url: "http://localhost:9001/uploads",
        headers: {
          ...dataz.getHeaders(),
        },
        data: dataz,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          url = response.data.data;
          // console.log(url);
          let data = url;

          let value = "image";
          addToDriverBotCart({ data, value, recipientPhone });
          let issues = CustomerSession.get(recipientPhone).cart;
          var date = new Date();
                  var options = {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                  };
                  var dateString = date.toLocaleString('en-GB', options);
          // console.log(issues);
          var dataz = JSON.stringify({
            datetime: dateString.replace(', ', ' ') ,
            NAME: JSON.stringify(Object.values(issues[1])).slice(2, -2),
            personname: JSON.stringify(Object.values(issues[2])).slice(2, -2),

            personcontact: JSON.stringify(Object.values(issues[3])).slice(
              2,
              -2
            ),
            persondesignation: JSON.stringify(Object.values(issues[4])).slice(
              2,
              -2
            ),

            personemail: JSON.stringify(Object.values(issues[5])).slice(2, -2),
            LOCATION: JSON.stringify(Object.values(issues[6])).slice(2, -2),
            image: JSON.stringify(Object.values(issues[7])).slice(2, -2),
            key: String(recipientPhone).substring(2, 12),
          });

          var config231 = {
            method: "post",
            url: "https://script.google.com/macros/s/AKfycbz57UprMoopkSTGnfsAp7571Uw0yKdb6yGFIiRbf9JEmySBWZHzb_e4xRd5LcTT0cQglA/exec?action=addUser",
            headers: {
              "Content-Type": "application/json",
              Cookie:
                "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
            },
            data: dataz,
          };
          var axios = require("axios");
          axios(config231)
            .then(function (response) {
              client.sendMessage(
                recipientPhone,
                " \n-------------------------------------------------------\n   *Thank you we have registered your details* \n-------------------------------------------------------\n"
              );
              // console.log(JSON.stringify(response.data));
              let issues = CustomerSession.get(recipientPhone).cart;
              var dataforward =
                new Date().toLocaleString() +
                "\n" +
                "Bank :" +
                JSON.stringify(Object.values(issues[1])).slice(2, -2) +
                "\n" +
                "Name :" +
                JSON.stringify(Object.values(issues[2])).slice(2, -2) +
                "\n" +
                "Number :" +
                JSON.stringify(Object.values(issues[3])).slice(2, -6) +
                "xxxx" +
                "\n" +
                "Designation :" +
                JSON.stringify(Object.values(issues[4])).slice(2, -2) +
                "\n" +
                "Email :xxxxxx" +
                JSON.stringify(Object.values(issues[5])).slice(8, -2) +
                "\n" +
                "Location :" +
                JSON.stringify(Object.values(issues[6])).slice(2, -2) +
                "\n" +
                "Fieldofficer :" +
                JSON.stringify(Object.values(issues[0])).slice(2, -2) ;

              // console.log(dataz, "ooooo");
              const { MessageMedia } = require("whatsapp-web.js");
              var media1 = JSON.stringify(Object.values(issues[7])).slice(
                2,
                -2
              );
              // console.log(media1, "media1");
              const media2 = MessageMedia.fromUrl(media1);
              // console.log(media2, "asdfff");
              // client.sendMessage("919599123075-1613143798@g.us", media);

              // client.sendMessage("919599123075-1613143798@g.us", dataforward);

              client.sendMessage("918882011952-1501916853@g.us", media);

              client.sendMessage("918882011952-1501916853@g.us", dataforward);

       

              // do something with the media data here
            })
            .catch(function (error) {
              // console.log(error);
            });

          var axios = require("axios");
          var data12 = JSON.stringify({
            datetime: new Date().toLocaleString(),
            name: JSON.stringify(Object.values(issues[1])).slice(2, -2),
            personname: JSON.stringify(Object.values(issues[2])).slice(2, -2),
            personcontact: JSON.stringify(Object.values(issues[3])).slice(
              2,
              -2
            ),
            persondesignation: JSON.stringify(Object.values(issues[4])).slice(
              2,
              -2
            ),
            personemail: JSON.stringify(Object.values(issues[5])).slice(2, -2),
            location: JSON.stringify(Object.values(issues[6])).slice(2, -2),
            image: JSON.stringify(Object.values(issues[7])).slice(2, -2),
            key: String(recipientPhone).substring(2, 12),
          });

          var config = {
            method: "post",
            url: "http://localhost:4000/todos/add",
            headers: {
              "Content-Type": "application/json",
            },
            data: data12,
          };

          axios(config)
            .then(function (response) {
              // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              // console.log(error);
            });

          // console.log(numberOfIssuesInCart);
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  }
});

// missing item photo start

const MISSINGITEMSsession = new Map();

var MISSINGITEMSmobilenumber = [];
var MISSINGITEMSkey = [];
var fetchMISSINGITEMSGooglesheet = {
  url: "https://script.google.com/macros/s/AKfycbwFOXhuuo1QljjIB_wOrpTtq7QCpQPyOOOlSyvhcPFen8IU4lZtvlIvC5U3vHWlhMGZxw/exec",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
  axios(fetchMISSINGITEMSGooglesheet)
    .then(function (response) {
      for (let i = 0; i < response.data.data.length; i++) {
        MISSINGITEMSmobilenumber.push(response.data.data[i][0].toString());
        MISSINGITEMSkey.push(response.data.data[i][1].toString());
      }
      //counting no. of drivers
      numberofMISSINGITEMS = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
  // console.log("MISSINGITEMSmobilenumber updated");
  // console.log(MISSINGITEMSmobilenumber);
}, 60000);

client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);

  let incomingMessage = msg;

  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  let recipientName = incomingMessage.author;
  let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
  let timestamp = incomingMessage.timestamp;

  if (!MISSINGITEMSsession.get(recipientPhone)) {
    MISSINGITEMSsession.set(recipientPhone, {
      cart: [],
    });
  }

  //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

  var indexof = MISSINGITEMSmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );

  let listOfIssuesInCart = ({ recipientPhone }) => {
    let issues = MISSINGITEMSsession.get(recipientPhone).cart;

    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;

  let addToMISSINGITEMSBotCart = async ({ data, value, recipientPhone }) => {
    if (value == "a") {
      MISSINGITEMSsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      MISSINGITEMSsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      MISSINGITEMSsession.get(recipientPhone).cart.push({ text: data });
    }
  };

  var TF1 = false;
  TF1 = 
  MISSINGITEMSmobilenumber.includes(
    String(recipientPhone).substring(2, 12)
  );

  if (TF1) {
    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "MISS") {
        // console.log(String(recipientPhone).substring(2, 12));
        MISSINGITEMSsession.get(recipientPhone).cart = [];

        let data = incomingMessage.body.toUpperCase();

        let value = "a";
        await addToMISSINGITEMSBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/kDwh0Gr/Whats-App-Image-2022-09-05-at-04-39-59.jpg"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind 🇮🇳🇮🇳🇮🇳, \n\nPlease enter description of Goods"
        );

        // console.log(MISSINGITEMSsession.get(recipientPhone).cart[0].a);
      } else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "b";
        await addToMISSINGITEMSBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          "Please send a good picture of material"
        );
      }
    } else if (numberOfIssuesInCart === 2 && msg.type == "image") {
      const media = await msg.downloadMedia();
      // await console.log(media.mimetype, media.filename, media.data.length);
      const imageDataURI = require("image-data-uri");
      const imageFileName = "new_image";
      const fs = require("fs");
      var imgname = "test" + Math.floor(100000 + Math.random() * 900000);

      const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
      await fs.writeFileSync("abc" + ".txt", datauri);
      await imageDataURI.outputFile(datauri, imgname + ".jpeg");

      var axios = require("axios");s

      var FormData = require("form-data");

      var dataz = new FormData();
      dataz.append(
        "file",
        fs.createReadStream(
          "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
            imgname +
            ".jpeg"
        )
      );

      var config = {
        method: "post",
        url: "http://localhost:9001/uploads",
        headers: {
          ...dataz.getHeaders(),
        },
        data: dataz,
      };

      axios(config).then(function (response) {
        // console.log(JSON.stringify(response.data));
        url = response.data.data;
        // console.log(url);
        let data = url;

        let value = "c";
        addToMISSINGITEMSBotCart({ data, value, recipientPhone });
        let issues = MISSINGITEMSsession.get(recipientPhone).cart;
                          var date = new Date();
                var options = {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false
                };
                var dateString = date.toLocaleString('en-GB', options);
        // console.log(issues);
        var dataz = JSON.stringify({
          datetime: dateString.replace(', ', ' ') ,
          description: JSON.stringify(Object.values(issues[1])).slice(2, -2),

          image: JSON.stringify(Object.values(issues[2])).slice(2, -2),
          key: String(recipientPhone).substring(2, 12),
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbwj2-c4UeSe68Y_TM7PsQaG6cOCxoVR1gPv2oX2BMtOdhqrU3fWslUB4BuFrhMoRtAu/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            client.sendMessage(
              recipientPhone,
              " \n-------------------------------------------------------\n   *Thank you we have registered that data \n-------------------------------------------------------\n"
            );
          })
          .catch(function (error) {
            // console.log(error);
          });
      });
    }
  }
});

// missing item photo end

//field officer end here

// toli issue start here




// Set interval for checking every 18000000 milliseconds (5 hours)
setInterval(function () {
  // Create a Date object to find out what time it is
  const date = new Date();

  // Check if it is within a 24 hour period (midnight to midnight)
  if (date.getHours() < 24) {
    // Make a GET request to the Google Sheets API to retrieve data
    axios({
      method: 'get',
      url: 'https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser',
      headers: {
        Cookie: 'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA',
      },
    }).then((response) => {
      // Initialize a string to store the report of pending cases
      let pendingReport = '';

      // Loop through the data and add the gaadi_malik (vehicle owner) to the report if the length is greater than 5
      for (let i = 566; i <= 580; i++) {
        if (response.data[i].Gaadi_Malik.length > 5) {
          pendingReport += `${response.data[i].Gaadi_Malik}\n`;
        }
      }

      // Get the total number of pending cases from the data
      const totalPending = response.data[565].Gaadi_Malik;

      // Send the report to the designated WhatsApp number
      client.sendMessage(
        '918369644748@c.us',
        `\n----------------------------------------
 *TOLI ISSUE PENDING REPORT* - ${totalPending}
${pendingReport}
----------------------------------------\n`,
      );
    });
  }
}, 180000);

const TOLIISSUESsession = new Map();

var TOLIISSUESmobilenumber = [];
var TOLIISSUESkey = [];

var fetchTOLIISSUESGooglesheet = {
  url: "https://script.googleusercontent.com/a/macros/agarwalpackers.com/echo?user_content_key=xcJWKD1sCswiQvVwCOw9o-YcH6OtP0KLsIQ-6sKs9p7BJ4vS0yUy7cY73bfQv4h9BB3eG5B8q7tS2pHlbS5hSifCsmF4mEJ-OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKCzuoJ5WTSD9188tqLxoWbKVeS6iIHTYzJjZxS61oCfaDU7x_w-TQkf885V-PCjFDu-9mOEHBi4pr8NcOIJduplfHmZJyYB0Kq4D6z8BYTftXW_LS6Bzq2jJk1_al-PHEu8mzDTCqnGIg&lib=MbgyGHfBewQklFfTuKq69uoDBSEx397KY",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
  
  axios(fetchTOLIISSUESGooglesheet)
    .then(function (response) {
        TOLIISSUESmobilenumber.splice(0, TOLIISSUESmobilenumber.length);
      TOLIISSUESkey.splice(0, TOLIISSUESkey.length);
      for (let i = 0; i < response.data.data.length; i++) {
       
        TOLIISSUESmobilenumber.push(response.data.data[i][0].toString());
        TOLIISSUESkey.push(response.data.data[i][8].toString());
      }
      //counting no. of drivers
      numberofTOLIISSUES = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
  // console.log("TOLIISSUESmobilenumber updated");
   console.log(TOLIISSUESkey);
}, 60000);

var axios = require("axios");
const { IncomingMessage } = require("http");

client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);

  let incomingMessage = msg;

  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  var result = JSON.stringify(msg);
  result = result.split('"notifyName":"')[1];
 
  // console.log(String(recipientName));
  let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
  let timestamp = incomingMessage.timestamp;

  if (!TOLIISSUESsession.get(recipientPhone)) {
    TOLIISSUESsession.set(recipientPhone, {
      cart: [],
    });
  }

  //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

  var indexof = TOLIISSUESmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );

  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = TOLIISSUESsession.get(recipientPhone).cart;

    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;

  let addToTOLIISSUESBotCart = async ({ data, value, recipientPhone }) => {
    if (value == "a") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "d") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "e") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "f") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "g") {
      TOLIISSUESsession.get(recipientPhone).cart.push({ text: data });
    }
  };

  var TF2 = false;
  TF2 = TOLIISSUESmobilenumber.includes(String(recipientPhone).substring(2, 12));

  if (TF2) {
    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "APML") {
        // console.log(String(recipientPhone).substring(2, 12));
        TOLIISSUESsession.get(recipientPhone).cart = [];

        let data;

        for (let i = 0; i < TOLIISSUESmobilenumber.length; i++) {
          if (TOLIISSUESmobilenumber[i] === String(recipientPhone).substring(2, 12)) {
            data = TOLIISSUESkey[i];
            break;
          }
        }
        
          let value = "a";
        console.log(data,"SADSADSADSAD"); 
                await addToTOLIISSUESBotCart({ data, value, recipientPhone });
                let numberOfIssuesInCart = listOfIssuesInCart({
                  recipientPhone,
                }).count;
  
       
     
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/c8DVnVT/toli.png"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind , \n\nSELECT TYPE OF ISSUE\n(1)PM -पैकिंग मटेरियल डिले है। \n(2)PM -इशू सली[प जेनरेट नहीं हुई है। \n(3)PM -सार्थक ERP में डिस्पैच  नहीं  किया।  \n(4)PM -रिसीव नहीं हुआ अस पैर इशू स्लिप । \n(5)PM -पैकिंग मटेरियल में शोर्तज है। \n(6)PM -पैकिंग मटेरियल में एक्सेस। \n((7)STATIONERY -पैकिंग लिस्ट/इन्वेंटरी शीट चाइए। \n(8)STATIONERY -जीसी कॉपी चाहिए |\n(9)STATIONERY -जीएफएन नोट्स चहिए |\n(10)STATIONERY -नो नीड इन्शुरन्स सर्टिफिकेट चहिए। \n(11)STATIONERY -डेक्लेरेशन सर्टिफिकेट चाहिए |\n(12)STATIONERY -चलन कॉपी चाइए। \n(13)DURING PACKING -vehicle  इस नॉट allocated  अस पैर बुकिंग। \n(14)DURING PACKING -vehicle  डिले।\n(15)DURING PACKING -vehicle  इम्प्रॉपर। \n(16)DURING PACKING -क्यूब इश्यू |\n(17)DURING PACKING -री इशू मटेरियल लेट। \n(18)DUTY MANAGER ISSUE-लेस्स वर्क allocated । \n(19)DUTY MANAGER ISSUE-रॉंग रूट प्लानिंग। \n(20)DUTY MANAGER ISSUE-करेक्ट इनफार्मेशन इस नॉट गिवेन। \n(21)PAYMENT -MR  नॉट जेनरेटेड। \n(22)PAYMENT -टोली पेमेंट पेंडिंग। \n(23)AFTER PACKING -आर्टिकल इनक्रीस हुए है।  \n(24)AFTER PACKING -स्टैर्स स्माल है। \n(25)AFTER PACKING -लिफ्ट मेंशन है लेकिन काम नहीं कर रहा है।  \n(26)AFTER PACKING -डेलिकेट आइटम है।  \n(27)AFTER PACKING -कस्टमर डूर पर बड़ी गाडी नहीं आएगी। \n(28)AFTER PACKING -बसेरमेंट में सामान जाएगा। "
        );

        // console.log(TOLIISSUESsession.get(recipientPhone).cart[0].a);
      } else if (incomingMessage.body.toUpperCase().includes("RES ")) {
        var data111 = JSON.stringify({
          datetime: new Date().toLocaleString(),
          issueno: msg.body.substring(4),
          resolvedNo: String(recipientPhone).substring(2, 12),
        });

        // console.log("mil gaya");
        // console.log(msg.body, ":aWDAWDWDWDAWD");
        var axios = require("axios");
        var config221 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbypoOMOANMDgdXVHakAL28R2iVTp24_RhjSZ3QppDmlLdqp-MtJHbMDIK4y_MA591n4JQ/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: data111,
        };

        axios(config221);

        client.sendMessage(
          recipientPhone,
          "We have closed the issue . Thankyou"
        );
      } else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "b";
        await addToTOLIISSUESBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        client.sendMessage(
          recipientPhone,
          " \n-------------------------------------------------------\n   *Thank you for concerned team will call you and solve your issue* \n-------------------------------------------------------\n"
        );
        let issues = TOLIISSUESsession.get(recipientPhone).cart;
        // console.log(issues);
        var num = Math.floor(Math.random() * 90000) + 10000;
                          var date = new Date();
                var options = {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false
                };
                var dateString = date.toLocaleString('en-GB', options);
        var dataz = JSON.stringify({
          datetime:  dateString.replace(', ', ' ') ,
          issue: JSON.stringify(Object.values(issues[1])).slice(2, -2),

          key: String(recipientPhone).substring(2, 12),

          issueno: num,
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbwbGNlTFx7Imc3CFl62o0dWsWXyfqkzuRMcmUcmrds2U3oAZ37aYXCiFdUUr60eMi-A/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            let issues = TOLIISSUESsession.get(recipientPhone).cart;

            var list = [
              "(1)PM -packing material delay",
              "(2)PM -issue slip not generated",
              "(3)PM -sarthak not dispacth in erp",
              "(4)PM -not received as per issue slip",
              "(5)PM -packing material shortage",
              "(6)PM -packing material excess",

              "(7)STATIONERY -packing list/inventory sheet chahiye",
              "(8)STATIONERY -gc copy chahiye",
              "(9)STATIONERY -gfn notes chahiye",
              "(10)STATIONERY -no need insurance certificate chahiye",
              "(11)STATIONERY -declaration certificate chahiye",
              "(12)STATIONERY -challan copy chahiye",

              "(13)DURING PACKING -Vehicle not allocated as per booking",
              "(14)DURING PACKING -Vehicle delayed",
              "(15)DURING PACKING -Vehicle improper",
              "(16)DURING PACKING -Cube issue",
              "(17)DURING PACKING -re issue material late",

              "(18)DUTY MANAGER ISSUELess work allocated",
              "(19)DUTY MANAGER ISSUEWrong Route Planning",
              "(20)DUTY MANAGER ISSUECorrect info not given",

              "(21)PAYMENT - MR not generated",
              "(22)PAYMENT - Toli Payement pending",

              "(23)AFTER PACKING -article increase hue",
              "(24)AFTER PACKING -stairs small hai",
              "(25)AFTER PACKING -lift mention hai lekin kaam nahi kar rha hai hai",
              "(26)AFTER PACKING -delicate item hai",
              "(27)AFTER PACKING -customer door par badi gadi nahi aayegi",
              "(28)AFTER PACKING -basement se saman jayega",
            ];
            var value =
              "(" + JSON.stringify(Object.values(issues[1])).slice(2, -2) + ")";

            for (var i = 0; i < list.length; i++) {
              if (list[i].includes(value)) {
                // console.log(list[i]);
                var issuedetail = list[i];
              }
            }

            var dataforward =
              new Date().toLocaleString() +
              "\n" +
              "issue :" +
              issuedetail +
              "\n" +
              "Number.:" +
              String(recipientPhone).substring(2, 12) +
             
              "\n" +
              "issueno:" +
              num +"\n"+
              "Toli/Sathi :" +
              JSON.stringify(Object.values(issues[0])).slice(2,-2) ;
              

            // console.log(dataz, "oooooWSDAWDWDAWDAWDWADWDDA");

           client.sendMessage("120363028056354007@g.us", dataforward);
          
            client.sendMessage(recipientPhone, dataforward);
          })
          .catch(function (error) {
            // console.log(error);
          });
      }
    }
  }
});

// toli issue end

// SPECIAL TRACKING START
setInterval(function () {
  // Set interval for checking
  var date = new Date(); // Create a Date object to find out what time it is
  // if(date.getHours() === 18 && date.getMinutes() === 50){  // Check the time
  if (date.getHours() < 24) {
    // Check the time

    var configJK = {
      method: "get",
      url: "https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser",
      headers: {
        Cookie:
          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
      },
    };

    axios(configJK).then(function (response) {
      var TOLIREPORT = "";

      for (var i = 798; i <= 840; i++) {
        if (response.data[i].Gaadi_Malik.length > 5) {
          TOLIREPORT += String(response.data[i].Gaadi_Malik) + "\n --------------------------- \n";
          // console.log(response.data[i].Gaadi_Malik.length, "sss");
        }
      }

      var totalissues = response.data[565].Gaadi_Malik;

      client.sendMessage(
        "120363045648565871@g.us",
        "\n----*SPECIAL TRACKING REPORT*----\n 🟢- Running \n 🔴-Halt \n ⌛- Pending Days \n ⏲️-Halt Hours \n *RR* - Req perday Kms \n 🚚-SXL \n 🚛 - MXL \n 🚍-Trailer" +
        "\n----------------------------------------\n"+
          "\n" +
          TOLIREPORT +  
          "\n----------------------------------------\n"
      );
    });
  }
}, 3600000);

const SPECIALTRACKINGsession = new Map();

var SPECIALTRACKINGmobilenumber = [];
var SPECIALTRACKINGkey = [];
var fetchSPECIALTRACKINGGooglesheet = {
  url: "https://script.google.com/macros/s/AKfycbxza8W3VB5tz5-yxnwovPZzDKKK0l06wtb7RAr8vocED9sw0j4hZhYcSWuBC02lzJ0/exec",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
  axios(fetchSPECIALTRACKINGGooglesheet)
    .then(function (response) {
      var SPECIALTRACKINGmobilenumber = [];
var SPECIALTRACKINGkey = [];
      for (let i = 0; i < response.data.data.length; i++) {
        SPECIALTRACKINGmobilenumber.push(response.data.data[i][0].toString());
        SPECIALTRACKINGkey.push(response.data.data[i][1].toString());
      }
      //counting no. of drivers
      numberofSPECIALTRACKING = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
  // console.log("SPECIALTRACKINGmobilenumber updated");
  // console.log(SPECIALTRACKINGmobilenumber);
}, 60000);

var axios = require("axios");

client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);

  let incomingMessage = msg;

  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  let recipientName = incomingMessage.author;
  let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
  let timestamp = incomingMessage.timestamp;

  if (!SPECIALTRACKINGsession.get(recipientPhone)) {
    SPECIALTRACKINGsession.set(recipientPhone, {
      cart: [],
    });
  }

  //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

  var indexof = SPECIALTRACKINGmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );

  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = SPECIALTRACKINGsession.get(recipientPhone).cart;

    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;

  let addToSPECIALTRACKINGBotCart = async ({ data, value, recipientPhone }) => {
    if (value == "a") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "d") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "e") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "f") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "g") {
      SPECIALTRACKINGsession.get(recipientPhone).cart.push({ text: data });
    }
  };

  var TF3 = true;
  TF3 = SPECIALTRACKINGmobilenumber.includes(
    String(recipientPhone).substring(2, 12)
  );

  if (TF3 !== "sfoisdj") {
    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "APMLSPL") {
        // console.log(String(recipientPhone).substring(2, 12));
        SPECIALTRACKINGsession.get(recipientPhone).cart = [];

        let data = incomingMessage.body.toUpperCase();

        let value = "a";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/xg8qZ09/start-location-and-end-location-icon-free-vector.jpg"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind 🇮🇳🇮🇳🇮🇳, \n\nWelcome to *APML-SPECIAL TRACKING* \n\nPlease enter Vehicle full Vehicle Number in Capital eg. NL01AB1582"
        );
        // console.log(SPECIALTRACKINGsession.get(recipientPhone).cart[0].a);
      } else if (incomingMessage.body.toUpperCase().includes("DEL ")) {
        var data111 = JSON.stringify({
          datetime: new Date().toLocaleString(),
          vehicleno: msg.body.substring(4),
        });

        // console.log("mil gaya");
        // console.log(msg.body, ":aWDAWDWDWDAWD");
        var axios = require("axios");
        var config221 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbyCrpwdLAkRzFwIhD62RyCkllJzyk8DKEIhV2WV9WbAeessBJueVaWDdv0ydZfxxNM/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: data111,
        };

        axios(config221);

        client.sendMessage(
          recipientPhone,
          "We have marked the vehicle delivered . Thankyou"
        );
      } else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "b";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(recipientPhone, "Enter From eg. Satna");
      } else if (numberOfIssuesInCart === 2 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "c";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          "Enter Destination eg. Mumbai"
        );
      } else if (numberOfIssuesInCart === 3 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "d";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          "Enter Target Date in dd/mm/yyyy format eg.22/10/2022 "
        );
      } else if (numberOfIssuesInCart === 4 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "e";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          "Enter dispatch Date in dd/mm/yyyy format eg.22/10/2022 "
        );
      } else if (numberOfIssuesInCart === 5 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "f";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(recipientPhone, "Enter Special Remark ");
      } else if (numberOfIssuesInCart === 6 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "g";
        await addToSPECIALTRACKINGBotCart({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");

        await client.sendMessage(
          recipientPhone,
          "Thank you we have added above data to special tracking screen you can view shorturl.at/ftzKN "
        );
        let issues = SPECIALTRACKINGsession.get(recipientPhone).cart;
        // console.log(issues);
                          var date = new Date();
                var options = {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false
                };
                var dateString = date.toLocaleString('en-GB', options);
        var dataz = JSON.stringify({
          datetime:  dateString.replace(', ', ' ') ,
          vehiclenumber: JSON.stringify(Object.values(issues[1])).slice(2, -2),
          from: JSON.stringify(Object.values(issues[2])).slice(2, -2),
          to: JSON.stringify(Object.values(issues[3])).slice(2, -2),
          target: JSON.stringify(Object.values(issues[4])).slice(2, -2),
          dispatch: JSON.stringify(Object.values(issues[5])).slice(2, -2),
          remark: JSON.stringify(Object.values(issues[6])).slice(2, -2),

          key: String(recipientPhone).substring(2, 12),
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbxCTQSJ8DLTmSXsPgJ-QKTyVVM1wbwd9W9og-VLyqysPkVtrDUGCCPU0N_vVxpdCF-JUQ/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));

            var dataforward =
              new Date().toLocaleString() +
              "\n" +
              "Vehiclenumber : " +
              JSON.stringify(Object.values(issues[1])).slice(2, -2) +
              "\n" +
              "From : " +
              JSON.stringify(Object.values(issues[2])).slice(2, -2) +
              "\n" +
              "To: " +
              JSON.stringify(Object.values(issues[3])).slice(2, -2) +
              "\n" +
              "Target: " +
              JSON.stringify(Object.values(issues[4])).slice(2, -2) +
              "\n" +
              "Dispatch: " +
              JSON.stringify(Object.values(issues[5])).slice(2, -2) +
              "\n" +
              "Remark: " +
              JSON.stringify(Object.values(issues[6])).slice(2, -2) +
              "\n" +
              "By: " +
              String(recipientName).substring(2, 12) +
              "\n" +
              // console.log(dataz, "oooooWSDAWDWDAWDAWDWADWDDA");

            client.sendMessage("120363045648565871@g.us", dataforward);
            client.sendMessage(recipientPhone, dataforward);
          })
          .catch(function (error) {
            // console.log(error);
          });
      }
    }
  }
});

// SPECIAL TRACKING END

// Warehouse issues start here

setInterval(function () {
  // Set interval for checking
  var date = new Date(); // Create a Date object to find out what time it is
  // if(date.getHours() === 18 && date.getMinutes() === 50){  // Check the time
  if (date.getHours() < 24) {
    // Check the time

    var configJK = {
      method: "get",
      url: "https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser",
      headers: {
        Cookie:
          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
      },
    };

    axios(configJK).then(function (response) {
      var WAREHOUSEREPORT = "";

      for (var i = 988; i <= 1090; i++) {
        if (response.data[i].Gaadi_Malik.length > 5) {
          WAREHOUSEREPORT += String(response.data[i].Gaadi_Malik) + "\n";
          // console.log(response.data[i].Gaadi_Malik.length, "sss");
        }
      }

      var totalissues = response.data[986].Gaadi_Malik;

      client.sendMessage(
        "120363027296086321@g.us",
        "\n----------------------------------------" +
          "\n *WAREHOUSE ISSUE PENDING REPORT* -" +
          totalissues +
          "\n" +
          WAREHOUSEREPORT +
          "\n----------------------------------------\n"
      );
    });
  }
}, 7200000);

const WAREHOUSEISSUEsession = new Map();

var WAREHOUSEISSUEmobilenumber = [];
var WAREHOUSEISSUEkey = [];
var fetchWAREHOUSEISSUEGooglesheet = {
  url: "https://script.google.com/macros/s/AKfycbwFOXhuuo1QljjIB_wOrpTtq7QCpQPyOOOlSyvhcPFen8IU4lZtvlIvC5U3vHWlhMGZxw/exec",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
  axios(fetchWAREHOUSEISSUEGooglesheet)
    .then(function (response) {
        WAREHOUSEISSUEmobilenumber.splice(0, WAREHOUSEISSUEmobilenumber.length);
      WAREHOUSEISSUEkey.splice(0, WAREHOUSEISSUEkey.length);
      for (let i = 0; i < response.data.data.length; i++) {
        WAREHOUSEISSUEmobilenumber.push(response.data.data[i][0].toString());
        WAREHOUSEISSUEkey.push(response.data.data[i][1].toString());
      }
      //counting no. of drivers
      numberofWAREHOUSEISSUE = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
  // console.log("WAREHOUSEISSUEmobilenumber updated");
  // console.log(WAREHOUSEISSUEmobilenumber);
}, 60000);

client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);

  let incomingMessage = msg;

  let recipientPhone = incomingMessage.from; // extract the phone number of sender

  let recipientName = incomingMessage.author;
  let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
  let timestamp = incomingMessage.timestamp;

  if (!WAREHOUSEISSUEsession.get(recipientPhone)) {
    WAREHOUSEISSUEsession.set(recipientPhone, {
      cart: [],
    });
  }

  //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

  var indexof = WAREHOUSEISSUEmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );

  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = WAREHOUSEISSUEsession.get(recipientPhone).cart;

    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;

  let addToWAREHOUSEISSUEsessionBotCart = async ({
    data,
    value,
    recipientPhone,
  }) => {
    if (value == "a") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "d") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "e") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "f") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "g") {
      WAREHOUSEISSUEsession.get(recipientPhone).cart.push({ text: data });
    }
  };

  var TF4 = false;
  TF4 = WAREHOUSEISSUEmobilenumber.includes(
    String(recipientPhone).substring(2, 12)
  );
  console.log(incomingMessage.body.toUpperCase()==="APMLHUB","asdfhgbsajdgfboisgadfibsadfbksbdfjsdljkhf")
  if(TF4 ){
 
  if (msg.type === "chat") {

    if (incomingMessage.body.toUpperCase() === "APMLHUB") {
      // console.log(String(recipientPhone).substring(2, 12));
      WAREHOUSEISSUEsession.get(recipientPhone).cart = [];
      let data = incomingMessage.body.toUpperCase();
      let value = "a";
      await addToWAREHOUSEISSUEsessionBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      const media = await MessageMedia.fromUrl(
        "https://www.truckingcube.com/images/safety-1.jpg"
      );
      await client.sendMessage(recipientPhone, media);
      await client.sendMessage(
        recipientPhone,
        "Jai Hind , \n\nSELECT TYPE OF ISSUE\n\n(1)Loading errors\n(2)Unloading errors\n(3)Missing Items errors\n(4)Storage material errors\n(5)Delivery and Dispatch items errors\n(6)Material management errors inside the warehouse.\n(7)Cube unloading issues\n(8)Quality chcek issues\n(9)Documentation issues\n(10)Inward out ward required issues\n(11)Seal inventory and record issues\n(12)Hygiene issues\n(13)Safety related issues\n(14)Vehicle timely deployment issues\n(15)Local vehicle reporting issues\n"
      );
      // console.log(WAREHOUSEISSUEsession.get(recipientPhone).cart[0].a);
    }  if (incomingMessage.body.toUpperCase().includes("RES ")) {
      var data111 = JSON.stringify({
        datetime: new Date().toLocaleString(),
        issueno: msg.body.substring(4),
        resolvedNo: String(recipientPhone).substring(2, 12),
      });

      // console.log("mil gaya");
      // console.log(msg.body, ":aWDAWDWDWDAWD");
      var axios = require("axios");
      var config221 = {
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbw5a58tr00hz0gWb65ZJOxY4NYZDqIwwJlOLQfPddlkk768lMg0LyfLHTGMEtdw8XrkXQ/exec?action=addUser",
        headers: {
          "Content-Type": "application/json",
          Cookie:
            "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
        },
        data: data111,
      };

      axios(config221);

      client.sendMessage(recipientPhone, "We have closed the issue . Thankyou");
    } else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
      // console.log(String(recipientPhone).substring(2, 12));
      let data = incomingMessage.body;
      let value = "b";
      await addToWAREHOUSEISSUEsessionBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      await client.sendMessage(recipientPhone, "SEND BRANCH NAME RESPONSIBLE");
    } else if (numberOfIssuesInCart === 2 && msg.type === "chat") {
      // console.log(String(recipientPhone).substring(2, 12));
      let data = incomingMessage.body;
      let value = "c";
      await addToWAREHOUSEISSUEsessionBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      await client.sendMessage(recipientPhone, "ENTER REMARK ");
    }else if (numberOfIssuesInCart === 3 && msg.type === "chat") {
      // console.log(String(recipientPhone).substring(2, 12));
      let data = incomingMessage.body;
      let value = "d";
      await addToWAREHOUSEISSUEsessionBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      await client.sendMessage(recipientPhone, "SEND THE PHOTO");
    }
  }
  if (msg.type === "image" && numberOfIssuesInCart === 4) {
    // console.log("hi");
    const media = await msg.downloadMedia();
    // await console.log(media.mimetype, media.filename, media.data.length);
    const imageDataURI = require("image-data-uri");
    const imageFileName = "new_image";
    const fs = require("fs");

    var imgname = "apmlvisits" + Math.floor(100000 + Math.random() * 900000);
    const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
    await fs.writeFileSync("abc" + ".txt", datauri);
    await imageDataURI.outputFile(datauri, imgname + ".jpeg");
    var axios = require("axios");
    var FormData = require("form-data");
    var dataz = new FormData();
    dataz.append(
      "file",
      fs.createReadStream(
        "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
          imgname +
          ".jpeg"
      )
    );
    var config = {
      method: "post",
      url: "http://localhost:9001/uploads",
      headers: {
        ...dataz.getHeaders(),
      },
      data: dataz,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        url = response.data.data;
        // console.log(url);
        let data = url;
        var num = Math.floor(Math.random() * 90000) + 10000;
        let value = "e";
        addToWAREHOUSEISSUEsessionBotCart({ data, value, recipientPhone });
        let issues = WAREHOUSEISSUEsession.get(recipientPhone).cart;
        // console.log(issues);
                          var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
        var dataz = JSON.stringify({
          datetime: dateString.replace(', ', ' ') ,
          issue: JSON.stringify(Object.values(issues[1])).slice(2, -2),
          issuebranch: JSON.stringify(Object.values(issues[2])).slice(2, -2),
         
          image: JSON.stringify(Object.values(issues[4])).slice(2, -2),

          issueno: num,
          key: String(recipientPhone).substring(2, 12),
          remark: JSON.stringify(Object.values(issues[3])).slice(2, -2),
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbw1xsY7tzFge5praLRnQ0iMX9zIseqDOMG-NLmNlTH56Ayost6HfG8pYd9-rFC3Mtw_Rg/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            client.sendMessage(
              recipientPhone,
              " \n-------------------------------------------------------\n   *Thank you we have registered your details* \n-------------------------------------------------------\n"
            );
            // console.log(JSON.stringify(response.data));

            ///fwd strt
            let issues2 = WAREHOUSEISSUEsession.get(recipientPhone).cart;

            var list = [
              "(1)Loading errors",
              "(2)Unloading errors",
              "(3)Missing Items errors",
              "(4)Storage material errors",
              "(5)Delivery and Dispatch items errors",
              "(6)Material management errors inside the warehouse.",
              "(7)Cube unloading issues",
              "(8)Quality chcek issues",
              "(9)Documentation issues",
              "(10)Inward out ward required issues",
              "(11)Seal inventory and record issues",
              "(12)Hygiene issues",
              "(13)Safety related issues",
              "(14)Vehicle timely deployment issues",
              "(15)Local vehicle reporting issues",
            ];
            var value =
              "(" +
              JSON.stringify(Object.values(issues2[1])).slice(2, -2) +
              ")";

            for (var i = 0; i < list.length; i++) {
              if (list[i].includes(value)) {
                // console.log(list[i]);
                var issuedetail = list[i];
              }
            }

            ///fwd end

            let issues = WAREHOUSEISSUEsession.get(recipientPhone).cart;
            var dataforward =
              "Datetime: " +
              new Date().toLocaleString() +
              "\n" +
              "Issue: " +
              issuedetail +
              "\n" +
              "Issuebranch: " +
              JSON.stringify(Object.values(issues[2])).slice(2, -2) +
              "\n" +
              "Issueno: " +
              num +
              "\n" +
 "remark: "+  JSON.stringify(Object.values(issues[3])).slice(2, -2) +
              "\n" +
              "By: " +
              String(recipientPhone).substring(2, 12);
            // console.log(dataz, "ooooo");
            const { MessageMedia } = require("whatsapp-web.js");
            var media1 = JSON.stringify(Object.values(issues[4])).slice(2, -2);
            // console.log(media1, "media1");
            const media2 = MessageMedia.fromUrl(media1);
            // console.log(media2, "asdfff");
            client.sendMessage("120363027296086321@g.us", media);
            client.sendMessage("120363027296086321@g.us", dataforward);
          })
          .catch(function (error) {
            // console.log(error);
          }); // var config = { //   method: 'post', //   url: 'http://localhost:4000/todos/add', //   headers: { //     'Content-Type': 'application/json' //   }, //   data : data12 // };
        //           var axios = require('axios');
        //     var data12 = JSON.stringify({
        //       "datetime": new Date().toLocaleString(),
        //       "name": JSON.stringify(Object.values(issues[1])).slice(2,-2),
        //       "personname": JSON.stringify(Object.values(issues[2])).slice(2,-2),
        //       "personcontact": JSON.stringify(Object.values(issues[3])).slice(2,-2),
        //       "persondesignation": JSON.stringify(Object.values(issues[4])).slice(2,-2),
        //       "personemail": JSON.stringify(Object.values(issues[5])).slice(2,-2),
        //       "location": JSON.stringify(Object.values(issues[6])).slice(2,-2),
        //       "image": JSON.stringify(Object.values(issues[7])).slice(2,-2),
        //       "key": String(recipientPhone).substring(2, 12)
        //     });
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // console.log(error);
          });
        // console.log(numberOfIssuesInCart);
      })
      .catch(function (error) {
        // console.log(error);
      });
  } }
});
// Warehouse issues end here

// ODC ENTRY START HERE

const APMLODCsession = new Map();

var axios = require("axios");

var APMLODCsessionmobilenumber = [];
var APMLODCsessionkey = [];
var fetchAPMLODCsessionGooglesheet = {
  url: "https://script.google.com/macros/s/AKfycbx7bmPu10b8SDEcIX1B6QNtMgCDFUAUMvrxq18w9Bf8CWzZUEOPeC-HhhQ05r6oC1TY/exec",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
  axios(fetchAPMLODCsessionGooglesheet)
    .then(function (response) {
      var APMLODCsessionmobilenumber = [];
var APMLODCsessionkey = [];
      for (let i = 0; i < response.data.data.length; i++) {
        APMLODCsessionmobilenumber.push(response.data.data[i][0].toString());
        APMLODCsessionkey.push(response.data.data[i][1].toString());
      }
      //counting no. of drivers
      numberofAPMLODCsession = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
  // console.log("APMLODCsessionmobilenumber updated");
  // console.log(APMLODCsessionmobilenumber);
}, 60000);

client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);
  let incomingMessage = msg;
  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  if (!APMLODCsession.get(recipientPhone)) {
    APMLODCsession.set(recipientPhone, {
      cart: [],
    });
  } //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable
  var indexof = APMLODCsessionmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );
  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = APMLODCsession.get(recipientPhone).cart;
    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;
  let addToAPMLODCsessionBotCart = async ({ data, value, recipientPhone }) => {
    if (value == "a") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "d") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "e") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "f") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "g") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "h") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "i") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "j") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "k") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "l") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "m") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "n") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "o") {
      APMLODCsession.get(recipientPhone).cart.push({ text: data });
    }
  };
  var TF5 = false;
  TF5 = APMLODCsessionmobilenumber.includes(
    String(recipientPhone).substring(2, 12)
  );

  if (TF5) {
    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "APMLODC") {
        // console.log(String(recipientPhone).substring(2, 12));
        APMLODCsession.get(recipientPhone).cart = [];
        let data = incomingMessage.body.toUpperCase();
        let value = "a";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/kDwh0Gr/Whats-App-Image-2022-09-05-at-04-39-59.jpg"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind , \n\n Welcome to APML-ODC \n Please enter Vehicle Number !! "
        );
        // console.log(APMLODCsession.get(recipientPhone).cart[0].a);
      } else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "b";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          "Enter Length of vehicles with goods in *Feet(FT)*/ गाडी की लम्बाई मॉल के साथ (feet) "
        );
      } else if (numberOfIssuesInCart === 2 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "c";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          "Enter Width of vehicles with goods in *Feet(FT)*/ गाडी की चौड़ाई  मॉल के साथ (feet)"
        );
      } else if (numberOfIssuesInCart === 3 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "d";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          "Enter Height of vehicles with goods in *Feet(FT)*/गाडी की उचाई  मॉल के साथ (feet) "
        );
      } else if (numberOfIssuesInCart === 4 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "e";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          "Enter approx Weight of vehicles with goods in *Tonnes* /गाडी का वजन मॉल के साथ (Tonnes)"
        );
      } else if (numberOfIssuesInCart === 5 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "f";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          "Send Image of Left Side / बाईं ओर की तस्वीर भेजें "
        );
      }
      else if (numberOfIssuesInCart === 10 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "k";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(recipientPhone, "Enter To / कहा तक");
      } else if (numberOfIssuesInCart === 11 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "l";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(
          recipientPhone,
          "Whether Including Challan? Y or N / एंट्री पे निकल वाना है ? "
        );
      } else if (numberOfIssuesInCart === 12 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));
        let data = incomingMessage.body;
        let value = "m";
        await addToAPMLODCsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        await client.sendMessage(recipientPhone, "Send PUC photo");
      }}
      if (msg.type === "image" && numberOfIssuesInCart === 6) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmlodc" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "g";
            addToAPMLODCsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send Image of Right Side /दाईं ओर की तस्वीर भेजें "
                  );
      })}

      if (msg.type === "image" && numberOfIssuesInCart === 7) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmlodc" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "h";
            addToAPMLODCsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send Image of Front Side / फ्रंट साइड की फोटो भेजें "
                  );
      })}


      if (msg.type === "image" && numberOfIssuesInCart === 8) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmlodc" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "j";
            addToAPMLODCsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send Image of Back Side / बैक साइड का फोटो भेजें"
                  );
      })}


      if (msg.type === "image" && numberOfIssuesInCart === 9) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmlodc" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "k";
            addToAPMLODCsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Enter From / कहा से"
                  );
      })}

      if (msg.type === "image" && numberOfIssuesInCart === 13) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmlodc" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "n";
            addToAPMLODCsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send Image of E-way Bill / कृपया इ वे बिल की एक क्लियर फोटो भेजो !"
                  );
      })}

      if (msg.type === "image" && numberOfIssuesInCart === 14) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmlodc" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "o";
            addToAPMLODCsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Thank you we have registered the details !! "
                  );
                  let issues = APMLODCsession.get(recipientPhone).cart;
            var dataforward =
              " *Datetime* : " +
              new Date().toLocaleString() +
              "\n" +
              " *Partyname* : " +
              JSON.stringify(Object.values(issues[1])).slice(2, -2) +
              "\n" +
              " *Length* : " +
              JSON.stringify(Object.values(issues[2])).slice(2, -2) +
              "\n" +
              " *Width* : " +
              JSON.stringify(Object.values(issues[3])).slice(2, -2) +
              "\n" +
              " *Height* : " +
              JSON.stringify(Object.values(issues[4])).slice(2, -2) +
              "\n" +
              " *Approx weight* : " +
              JSON.stringify(Object.values(issues[5])).slice(2, -2) +
              "\n" +
              " *Left image* : " +
              JSON.stringify(Object.values(issues[6])).slice(2, -2) +
              "\n" +
              " *Right image* : " +
              JSON.stringify(Object.values(issues[7])).slice(2, -2) +
              "\n" +
              " *Front image* : " +
              JSON.stringify(Object.values(issues[8])).slice(2, -2) +
              "\n" +
              " *Back image* : " +
              JSON.stringify(Object.values(issues[9])).slice(2, -2) +
              "\n" +
              " *From* : " +
              JSON.stringify(Object.values(issues[10])).slice(2, -2) +
              "\n" +
              " *To* : " +
              JSON.stringify(Object.values(issues[11])).slice(2, -2) +
              "\n" +
              " *Challan including?* : " +
              JSON.stringify(Object.values(issues[12])).slice(2, -2) +
              "\n" +
              " *PUC* : " +
              JSON.stringify(Object.values(issues[13])).slice(2, -2) +
              "\n" +
              " *Eway bill* : " +
              JSON.stringify(Object.values(issues[14])).slice(2, -2) +
              "\n" +
          
              " *By* : " +
              String(recipientPhone).substring(2, 12);
           
            const { MessageMedia } = require("whatsapp-web.js");
            var media1 = JSON.stringify(Object.values(issues[6])).slice(2, -2);
            
            // console.log(media1, "media1");
            const media2 = MessageMedia.fromUrl(media1);
            // console.log(media2, "asdfff");
            client.sendMessage("918237799889-1533005936@g.us", media);
            client.sendMessage("918237799889-1533005936@g.us", dataforward);
                                var date = new Date();
                    var options = {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false
                    };
                    var dateString = date.toLocaleString('en-GB', options);
                    
      
        var dataz = JSON.stringify({
          datetime: dateString.replace(', ', ' ') ,
          partyname: JSON.stringify(Object.values(issues[1])).slice(2, -2),
          length: JSON.stringify(Object.values(issues[2])).slice(2, -2),
          width: JSON.stringify(Object.values(issues[3])).slice(2, -2),
          height: JSON.stringify(Object.values(issues[4])).slice(2, -2),
          appxweight: JSON.stringify(Object.values(issues[5])).slice(2, -2),
          leftimage: JSON.stringify(Object.values(issues[6])).slice(2, -2),
          rightimage: JSON.stringify(Object.values(issues[7])).slice(2, -2),
          frontimage: JSON.stringify(Object.values(issues[8])).slice(2, -2),
          backimage: JSON.stringify(Object.values(issues[9])).slice(2, -2),
          from: JSON.stringify(Object.values(issues[10])).slice(2, -2),
          to: JSON.stringify(Object.values(issues[11])).slice(2, -2),
          challaninc: JSON.stringify(Object.values(issues[12])).slice(2, -2),
          puc: JSON.stringify(Object.values(issues[13])).slice(2, -2),
          eway: JSON.stringify(Object.values(issues[14])).slice(2, -2),
     
          by: String(recipientPhone).substring(2, 12),
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbzMi4S5jsN1pIcfN6EU_wLBXErqaTTqr2GxHgI8WH5PdXncPoFNJ5WkXGzBvFHSG3dBBA/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };


        var axios = require("axios");
        axios(config231)





                  
      }
      
      
      
      
      
      
      )}
  
    
   
 
  }
});

// ODC ENTRY END HERE


// ADMIN START HERE

const APMLADMINsession = new Map();

var axios = require("axios");
const  APMLADMINsessionmobilenumber = [];
const user = [];

const approver = "120363047382834459@g.us"

var fetchAPMLADMINsessionGooglesheet = {
  url: "https://script.google.com/macros/s/AKfycbywQMhapsOCQRnDrSWzSDyJsBtwKp-h02nAGlmcH8Fu3vIUaKI3Rx9yWUXQqtcGG8Ru/exec",
  headers: {
    Cookie:
      "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
  },
};

setInterval(function () {
 
  axios(fetchAPMLADMINsessionGooglesheet)
    .then(function (response) {
        APMLADMINsessionmobilenumber.splice(0, APMLADMINsessionmobilenumber.length);
user.splice(0, user.length);
for (let i = 0; i < response.data.data.length; i++) {
    
        APMLADMINsessionmobilenumber.push(response.data.data[i][0].toString());
        user.push(response.data.data[i][1].toString());
      }
      //counting no. of drivers
      numberofAPMLADMINsession = response.data.data.length;
    })
    .catch(function (error) {
      // console.log(error);
    });
   console.log("APMLADMINsessionmobilenumber updated");
   console.log(APMLADMINsessionmobilenumber);
 console.log(user);
}, 60000);



var axios = require('axios');
const { out } = require("forever");

client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);
  let incomingMessage = msg;
  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  if (!APMLADMINsession.get(recipientPhone)) {
    APMLADMINsession.set(recipientPhone, {
      cart: [],
    });
  } //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable
  var indexof = APMLADMINsessionmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );
  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = APMLADMINsession.get(recipientPhone).cart;
    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;
  let addToAPMLADMINsessionBotCart = async ({ data, value, recipientPhone }) => {
    if (value == "a") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "d") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "e") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "f") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "g") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "h") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "i") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "j") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "k") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "l") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "m") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "n") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "o") {
      APMLADMINsession.get(recipientPhone).cart.push({ text: data });
    }
  };
  var TF6 = false;
  TF6 = APMLADMINsessionmobilenumber.includes(
    String(recipientPhone).substring(2, 12)
  );

  if (TF6) {
    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "APMLADMIN") {
        // console.log(String(recipientPhone).substring(2, 12));
        APMLADMINsession.get(recipientPhone).cart = [];
   
       

let data;

for (let i = 0; i < APMLADMINsessionmobilenumber.length; i++) {
  if (APMLADMINsessionmobilenumber[i] === String(recipientPhone).substring(2, 12)) {
    data = user[i];
    break;
  }
}

  let value = "a";
console.log(data,"SADSADSADSAD"); 
        await addToAPMLADMINsessionBotCart({ data, value, recipientPhone });
        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
        // await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/kDwh0Gr/Whats-App-Image-2022-09-05-at-04-39-59.jpg"
        );
        await client.sendMessage(recipientPhone, media);
        await client.sendMessage(
          recipientPhone,
          "Jai Hind , \n\n Welcome to APML-ADMIN \n Please Send 4 photos of Washroom at your branch/hub 1 by 1  !! "
        );
  
      }else if (incomingMessage.body.toUpperCase().includes("REM ")) {

  let parts = msg.body.split(" ");
let issueno = parts[1];
let remark = parts.slice(2).join(" ");
  var data111 = JSON.stringify({
    datetime: new Date().toLocaleString(),
    issueno: issueno,
    remark: remark,
    resolvedNo: String(recipientPhone).substring(2, 12),
  });

  // console.log("mil gaya");
  // console.log(msg.body, ":aWDAWDWDWDAWD");
  var axios = require("axios");
  var config221 = {
    method: "post",
    url: "https://script.google.com/macros/s/AKfycbxEc80ACycDJA76BXljrDrTKtseLPpXi4DS4vY8YQQlKo-cHX9mnIT0vO6D4QzjocPOUw/exec?action=addUser",
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
    },
    data: data111,
  };

  axios(config221);

  client.sendMessage(recipientPhone, "We have closed the issue . Thankyou");
}}
      if (msg.type === "image" && numberOfIssuesInCart === 1) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "b";
            addToAPMLADMINsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send 3 more image 1 by 1 "
                  );

                  let issues = APMLADMINsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                    " *Image 1* : " +
                    JSON.stringify(Object.values(issues[1])).slice(2, -2) +
                    "\n" +
             
                    "*hygienepic.* :" + num + "\n"+
"User :" + JSON.stringify(Object.values(issues[0])) ;
                 
                  const { MessageMedia } = require("whatsapp-web.js");
                  var media1 = JSON.stringify(Object.values(issues[1])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                  client.sendMessage(approver, media);
                  client.sendMessage(approver, dataforward);
                          var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
        
            
              var dataz = JSON.stringify({
                datetime: dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[1])).slice(2, -2),
                hygienepic: num,
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
      
              var config231 = {
                method: "post",
                url: "https://script.google.com/macros/s/AKfycbxEc80ACycDJA76BXljrDrTKtseLPpXi4DS4vY8YQQlKo-cHX9mnIT0vO6D4QzjocPOUw/exec?action=addUser1",
                headers: {
                  "Content-Type": "application/json",
                  Cookie:
                    "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                },
                data: dataz,
              };
      
      
              var axios = require("axios");
              axios(config231)
      
      
      })}
      else if (msg.type === "image" && numberOfIssuesInCart === 2) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "c";
            addToAPMLADMINsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send 2 more image 1 by 1 "
                  );
                  let issues = APMLADMINsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                    " *Image 2* : " +
                    JSON.stringify(Object.values(issues[2])).slice(2, -2) +
                    "\n" +
             
                    
                    "*hygienepic.* :" + num + "\n"+
"User :" + JSON.stringify(Object.values(issues[0])) ;
                 
                  const { MessageMedia } = require("whatsapp-web.js");

                  var media1 = JSON.stringify(Object.values(issues[2])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                  client.sendMessage(approver, media);
                  client.sendMessage(approver, dataforward);
                          var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
       
              var dataz = JSON.stringify({
                datetime: dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[2])).slice(2, -2),
                hygienepic: num,
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
      
              var config231 = {
                method: "post",
                url: "https://script.google.com/macros/s/AKfycbxEc80ACycDJA76BXljrDrTKtseLPpXi4DS4vY8YQQlKo-cHX9mnIT0vO6D4QzjocPOUw/exec?action=addUser1",
                headers: {
                  "Content-Type": "application/json",
                  Cookie:
                    "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                },
                data: dataz,
              };
      
      
              var axios = require("axios");
              axios(config231)
      })
    }

    else if (msg.type === "image" && numberOfIssuesInCart === 3) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "d";
            addToAPMLADMINsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send 1 more image "
                  );
                  let issues = APMLADMINsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                    " *Image 3* : " +
                    JSON.stringify(Object.values(issues[3])).slice(2, -2) +
                    "\n" +
             
                   
                    "*hygienepic.* :" + num + "\n"+
"User :" + JSON.stringify(Object.values(issues[0])) ;
                 
                  const { MessageMedia } = require("whatsapp-web.js");
                  var media1 = JSON.stringify(Object.values(issues[3])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                  client.sendMessage(approver, media);
                  client.sendMessage(approver, dataforward);
      
                                var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
       
              var dataz = JSON.stringify({
                datetime: dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[3])).slice(2, -2),
                hygienepic: num,
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
              var config231 = {
                method: "post",
                url: "https://script.google.com/macros/s/AKfycbxEc80ACycDJA76BXljrDrTKtseLPpXi4DS4vY8YQQlKo-cHX9mnIT0vO6D4QzjocPOUw/exec?action=addUser1",
                headers: {
                  "Content-Type": "application/json",
                  Cookie:
                    "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                },
                data: dataz,
              };
      
      
              var axios = require("axios");
              axios(config231)
      })}
    
      if (msg.type === "image" && numberOfIssuesInCart === 4) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "e";
            addToAPMLADMINsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Thank you we have stored admin data of your branch"
                  );

                  let issues = APMLADMINsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                   " *Image 4* : " +
                    JSON.stringify(Object.values(issues[4])).slice(2, -2)+ "\n" +
                    " *By* : " +
                    String(recipientPhone).substring(2, 12) +
                    "\n" +
                   
                    "*hygienepic.* :" + num + "\n"+
"User :" + JSON.stringify(Object.values(issues[0])) ;
                  const { MessageMedia } = require("whatsapp-web.js");
                  var media1 = JSON.stringify(Object.values(issues[4])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                client.sendMessage(approver, media);
                  client.sendMessage(approver, dataforward);
      
                                var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
   
              var dataz = JSON.stringify({
                datetime: dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[4])).slice(2, -2),
                hygienepic: num,
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
      
              var config231 = {
                method: "post",
                url: "https://script.google.com/macros/s/AKfycbxEc80ACycDJA76BXljrDrTKtseLPpXi4DS4vY8YQQlKo-cHX9mnIT0vO6D4QzjocPOUw/exec?action=addUser1",
                headers: {
                  "Content-Type": "application/json",
                  Cookie:
                    "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
                },
                data: dataz,
              };
      
      
              var axios = require("axios");
              axios(config231)
      
      
      
      
      })}
 
  }
});

// ADMIN END HERE







// admin report start

// SPECIAL TRACKING START
setInterval(function () {
  // Set interval for checking
   // Set interval for checking
   var date = new Date(); // Create a Date object to find out what time it is
   if (date.getHours() === 12 && date.getMinutes() === 00) {
    // Check the time




    var configJK = {
      method: "get",
      url: "https://script.google.com/macros/s/AKfycbzM1TivJFHPeGEURXbATNieDR7TF4vZ9tNdsGH0Q580dnMSgX8n-FRUBqUCF_Sw-HYAfQ/exec?action=getUser",
      headers: {
        Cookie:
          "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
      },
    };

    axios(configJK).then(function (response) {
      var TOLIREPORT = "";

      for (var i = 1508; i <= 1558; i++) {
        if (response.data[i].Gaadi_Malik.length > 0) {
          TOLIREPORT += String(response.data[i].Gaadi_Malik) + "\n --------------------------- \n";
          // console.log(response.data[i].Gaadi_Malik.length, "sss");
        }
      }

      var totalissues = response.data[565].Gaadi_Malik;

      client.sendMessage(
        approver,
        "\n---- *ADMIN WASHROOM PENDENCY REPORT* ----\n " +
        "\n----------------------------------------\n"+
          "\n" +
          TOLIREPORT +  
          "\n----------------------------------------\n"
      );
    });
  }
}, 60000);

// admin report end






//distance start


const pincodesession= new Map();

var axios = require("axios");


client.on("message", async (msg) => {
  // console.log("MESSAGE RECEIVED", msg);

  let incomingMessage = msg;

  let recipientPhone = incomingMessage.from; // extract the phone number of sender
  var result = JSON.stringify(msg);
  result = result.split('"notifyName":"')[1];
 
  // console.log(String(recipientName));
  let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
  let timestamp = incomingMessage.timestamp;

  if (!pincodesession.get(recipientPhone)) {
    pincodesession.set(recipientPhone, {
      cart: [],
    });
  }

  //Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

  var indexof = TOLIISSUESmobilenumber.indexOf(
    String(recipientPhone).substring(2, 12)
  );

  let listOfIssuesInCart = ({ recipientPhone }) => {
    let total = 0;
    let issues = pincodesession.get(recipientPhone).cart;

    let count = issues.length;
    return { issues, count };
  };
  let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
  }).count;

  let addToTOLIISSUESBotCart1 = async ({ data, value, recipientPhone }) => {
    if (value == "a") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "b") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "c") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "d") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "e") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "f") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    } else if (value == "g") {
      pincodesession.get(recipientPhone).cart.push({ text: data });
    }
  };

  var TF7 = false;



    if (msg.type === "chat") {
      if (incomingMessage.body.toUpperCase() === "APMLD") {
        // console.log(String(recipientPhone).substring(2, 12));
        pincodesession.get(recipientPhone).cart = [];

        let data =incomingMessage.body ;


        
          let value = "a";
        console.log(data,"SADSADSADSAD"); 
                await addToTOLIISSUESBotCart1({ data, value, recipientPhone });
                let numberOfIssuesInCart = listOfIssuesInCart({
                  recipientPhone,
                }).count;
  
       
     
       await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        const media = await MessageMedia.fromUrl(
          "https://i.ibb.co/c8DVnVT/toli.png"
        );

        await client.sendMessage(
          recipientPhone,
          "Jai Hind , \n Welcome to APML Distance \n\n दूरी प्राप्त करने के लिए कृपये *फ्रॉम/शुरुआती* लोकेशन टाइप करे  \n\n Write *from location* to get distance "
        );

        // console.log(TOLIISSUESsession.get(recipientPhone).cart[0].a);
      }  else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        let data = incomingMessage.body;

        let value = "b";
        await addToTOLIISSUESBotCart1({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;
       await console.log(numberOfIssuesInCart);
        const { MessageMedia } = require("whatsapp-web.js");
        client.sendMessage(
          recipientPhone,
          " दूरी प्राप्त करने के लिए कृपये *अंतिम * लोकेशन टाइप करे  \n\n Write *end  location* to get distance "
        );

      }else if (numberOfIssuesInCart === 2 && msg.type === "chat") {
        // console.log(String(recipientPhone).substring(2, 12));

        
        let data = incomingMessage.body;

        let value = "c";
        await addToTOLIISSUESBotCart1({ data, value, recipientPhone });

        let numberOfIssuesInCart = listOfIssuesInCart({
          recipientPhone,
        }).count;

        let issues = pincodesession.get(recipientPhone).cart;
        var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
      
        var dataz = JSON.stringify({
          datetime:  dateString.replace(', ', ' ') ,
          from: JSON.stringify(Object.values(issues[1])).slice(2, -2),
          to: JSON.stringify(Object.values(issues[2])).slice(2, -2),

          by: String(recipientPhone).substring(2, 12),

       
        });

        
          // Navigate to Google Maps
         
          const puppeteer = require('puppeteer');

          async function scrapeDistance() {
            // Launch a headless browser
            const browser = await puppeteer.launch();
          
            // Open a new page
            const page = await browser.newPage();
          
            // Navigate to Google Maps
            await page.goto('https://www.google.com/maps/dir/'+JSON.stringify(Object.values(issues[1])).slice(2, -2)+'/'+JSON.stringify(Object.values(issues[2])).slice(2, -2));
        
          
            // Wait for the distance element to appear
            await page.waitForSelector('div[jstcache="202"]');
          
            // Evaluate a JavaScript expression in the context of the page and return the result
            const distance = await page.evaluate(() => {
              // Select the distance element and return its text
              const distanceElement = document.querySelector('div[jstcache="202"]');
              return distanceElement.innerText;
            });
          
            // Close the browser
            await browser.close();
          
            // Return the distance
            return distance;
          }
          
          // Call the function and log the result
          scrapeDistance().then(distance => {
            client.sendMessage(
              recipientPhone,"Distance from "+JSON.stringify(Object.values(issues[1])).slice(2, -2)+" & "+JSON.stringify(Object.values(issues[2])).slice(2, -2)+" is : \n *"+distance+"* "
            );
          });
          
        // Call the function and log the result
    
      
     
        
        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbw2Cg1b_wf3xbLGzL235ftwUIxCKHN0rfCUDwmbjmC_Xv1a9BtsqziCMkzo6cp90RpckQ/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            console.log(response,"SADSADSAD")
      
            
     
  

        

            
          })
          .catch(function (error) {
            // console.log(error);
          });
      }
    }
 
});

// // toli issue end


// // distance end



//PEST CONTROL START
const PESTBOTsession = new Map();


var num = Math.floor(Math.random() * 90000) + 10000;

var PESTBOTmobilenumber = [];
var PESTBOTkey = [];
var fetchPESTBOTGooglesheet= {

url: "https://script.google.com/macros/s/AKfycbym3v4dr0J1NtZzwv7Nw6kxOA2gr_8BTBb7J77KWn3YyGBXWmFKnxq18oLUc8HFOigJLg/exec",
headers: {
'Cookie':
'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA'
},
};





setInterval(function () {
axios(fetchPESTBOTGooglesheet)
.then(function (response) {
for (let i = 0; i < response.data.data.length; i++) {
PESTBOTmobilenumber.push(response.data.data[i][0].toString())
PESTBOTkey.push(response.data.data[i][1].toString())
}
//counting no. of drivers
numberofPESTBOT = response.data.data.length
})
.catch(function (error) {
console.log(error);

});
console.log("PESTBOTmobilenumber updated")
console.log(PESTBOTmobilenumber)
}, 60000);






var axios = require('axios');



client.on('message', async msg => {
// console.log('MESSAGE RECEIVED', msg);

let incomingMessage = msg;

let recipientPhone = incomingMessage.from; // extract the phone number of sender
let recipientName = incomingMessage.author;
let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
let timestamp = incomingMessage.timestamp

if (!PESTBOTsession.get(recipientPhone)) {
PESTBOTsession.set(recipientPhone, {
cart: [],
});
}

//Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

var indexof = PESTBOTmobilenumber.indexOf(
String(recipientPhone).substring(2, 12)
);


let listOfIssuesInCart = ({ recipientPhone }) => {
let total = 0;
let issues = PESTBOTsession.get(recipientPhone).cart;

let count = issues.length;
return { issues, count };
}
let numberOfIssuesInCart = listOfIssuesInCart({
recipientPhone,
}).count;


let addToPESTBOTsessionBotCart = async ({ data, value, recipientPhone }) => {
if (value == "a") {
PESTBOTsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "b") {
PESTBOTsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "c") {
PESTBOTsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "d") {
PESTBOTsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "e") {
PESTBOTsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "f") {
    PESTBOTsession.get(recipientPhone).cart.push({ text: data });
    }
    else if (value == "g") {
        PESTBOTsession.get(recipientPhone).cart.push({ text: data });
        }
        else if (value == "h") {
            PESTBOTsession.get(recipientPhone).cart.push({ text: data });
            }
        }
            var TF8 = false;
TF8 = PESTBOTmobilenumber.includes(
String(recipientPhone).substring(2, 12)
);

if (TF8) {

    if (msg.type === "chat") {
    if (incomingMessage.body.toUpperCase() === "APMLPEST") {
    
    console.log(String(recipientPhone).substring(2, 12))
    PESTBOTsession.get(recipientPhone).cart = [];
    
    
    let data = incomingMessage.body.toUpperCase();
    
    let value = "a";
    await addToPESTBOTsessionBotCart({ data, value, recipientPhone });
    
    let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
    }).count;
    await console.log(numberOfIssuesInCart)
    const { MessageMedia } = require('whatsapp-web.js');
    const media = await MessageMedia.fromUrl('https://i.ibb.co/kDwh0Gr/Whats-App-Image-2022-09-05-at-04-39-59.jpg');
    await client.sendMessage(recipientPhone, media);
    await client.sendMessage(recipientPhone, "Jai Hind , \n\n Welcome to APML\n pls send the photo ")
    
    
    console.log(PESTBOTsession.get(recipientPhone).cart[0].a)
}}
    

   else if (msg.type === "image" && numberOfIssuesInCart === 1) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
           
            let value = "b";
            addToPESTBOTsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "Send the PHOTO OF ----- "
                  );

                  let issues = PESTBOTsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                    " *Image 1* : " +
                    JSON.stringify(Object.values(issues[1])).slice(2, -2) +
                    "\n" +
             
                    "*issueno.* :" + num ;
                 
                  const { MessageMedia } = require("whatsapp-web.js");
                  var media1 = JSON.stringify(Object.values(issues[1])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                  client.sendMessage("917718959200@c.us", media);
                  client.sendMessage("917718959200@c.us", dataforward);
                       var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
            
              var dataz = JSON.stringify({
                datetime:  dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[1])).slice(2, -2),
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
      
          
      
      
      })}
      else if (msg.type === "image" && numberOfIssuesInCart === 2) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "c";
            addToPESTBOTsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "SEND THE PHOTO OF----- "
                  );
                  let issues = PESTBOTsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                    " *Image 2* : " +
                    JSON.stringify(Object.values(issues[2])).slice(2, -2) +
                    "\n" +
             
                    "*issueno.* :" + num ;
                 
                  const { MessageMedia } = require("whatsapp-web.js");
                  var media1 = JSON.stringify(Object.values(issues[2])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                  client.sendMessage("917718959200@c.us", media);
                  client.sendMessage("917718959200@c.us", dataforward);
                          var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
            
              var dataz = JSON.stringify({
                datetime: dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[2])).slice(2, -2),
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
      
      
      
             
      })
    }
    
    else if (msg.type === "image" && numberOfIssuesInCart === 3) {
        // console.log("hi");
        const media = await msg.downloadMedia();
        // await console.log(media.mimetype, media.filename, media.data.length);
        const imageDataURI = require("image-data-uri");
        const imageFileName = "new_image";
        const fs = require("fs");
    
        var imgname = "apmladmin" + Math.floor(100000 + Math.random() * 900000);
        const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
        await fs.writeFileSync("abc" + ".txt", datauri);
        await imageDataURI.outputFile(datauri, imgname + ".jpeg");
        var axios = require("axios");
        var FormData = require("form-data");
        var dataz = new FormData();
        dataz.append(
          "file",
          fs.createReadStream(
            "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
              imgname +
              ".jpeg"
          )
        );
        var config = {
          method: "post",
          url: "http://localhost:9001/uploads",
          headers: {
            ...dataz.getHeaders(),
          },
          data: dataz,
        };
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            url = response.data.data;
            // console.log(url);
            let data = url;
            var num = Math.floor(Math.random() * 90000) + 10000;
            let value = "c";
            addToPESTBOTsessionBotCart({ data, value, recipientPhone });
            client.sendMessage(
                    recipientPhone,
                    "pls rate between 1 to 10"
                  );
                  let issues = PESTBOTsession.get(recipientPhone).cart;
                  
                  var dataforward =
                    " *Datetime* : " +
                    new Date().toLocaleString() +
                    "\n" +
                    " *Image 2* : " +
                    JSON.stringify(Object.values(issues[2])).slice(2, -2) +
                    "\n" +
             
                    "*issueno.* :" + num ;
                 
                  const { MessageMedia } = require("whatsapp-web.js");
                  var media1 = JSON.stringify(Object.values(issues[2])).slice(2, -2);
                  
                  // console.log(media1, "media1");
                  const media2 = MessageMedia.fromUrl(media1);
                  // console.log(media2, "asdfff");
                  client.sendMessage("917718959200@c.us", media);
                  client.sendMessage("917718959200@c.us", dataforward);
                          var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
            
              var dataz = JSON.stringify({
                datetime: dateString.replace(', ', ' ') ,
                image1: JSON.stringify(Object.values(issues[2])).slice(2, -2),
        
                
           
                by: String(recipientPhone).substring(2, 12),
              });
      
      
      })
    }
     if (numberOfIssuesInCart === 4 && msg.type === "chat") {
        console.log(String(recipientPhone).substring(2, 12))
        
        
        
        let data = incomingMessage.body;
        
        let value = "f";
        await addToPESTBOTsessionBotCart({ data, value, recipientPhone });
        
        let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
        }).count;
        await console.log(numberOfIssuesInCart)
        const { MessageMedia } = require('whatsapp-web.js');
        
        await client.sendMessage(recipientPhone,"PLS WRITE REMARK")
        
        
        
        }
        
 if (numberOfIssuesInCart === 5 && msg.type === "chat") {
    console.log(String(recipientPhone).substring(2, 12))
    
    
    
    let data = incomingMessage.body;
    
    let value = "g";
    await addToPESTBOTsessionBotCart({ data, value, recipientPhone });
    
    let numberOfIssuesInCart = listOfIssuesInCart({
    recipientPhone,
    }).count;
    await console.log(numberOfIssuesInCart)
    const { MessageMedia } = require('whatsapp-web.js');
    
    
     let issues = PESTBOTsession.get(recipientPhone).cart;
    
 var dataz1 = JSON.stringify({
"datetime": new Date().toLocaleString(),
"photo1": JSON.stringify(Object.values(issues[1])).slice(2,-2),
"phto2": JSON.stringify(Object.values(issues[2])).slice(2,-2),
"reportphoto": JSON.stringify(Object.values(issues[3])).slice(2,-2),
"rating": JSON.stringify(Object.values(issues[4])).slice(2,-2),
"remark": JSON.stringify(Object.values(issues[5])).slice(2,-2),
"issueno": num   })
console.log (dataz1,"gkugiugo")
var config231 = {
  method: 'post',
  url: 'https://script.google.com/macros/s/AKfycbz8YMCs6WFyCwHBFCdAj319GCSudbGCcSzLY7rXI0VommNa_lrBxzLvoyltzwErxpxYUw/exec?action=addUser1',
  headers: {
      'Content-Type': 'application/json',
      'Cookie': 'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA'
    },
    data : dataz1
  };
  var axios = require('axios');
  axios(config231)
  .then(function (response) {client.sendMessage(recipientPhone, " \n-------------------------------------------------------\n   *Thank you we have registered your details* \n-------------------------------------------------------\n");
  console.log(JSON.stringify(response.data))
   
              
          })


var dataforward =
    new Date().toLocaleString() + "\n" +
    "datetime"+new Date().toLocaleString()+"\n" +
    "photo1:"+JSON.stringify(Object.values(issues[1])).slice(2,-2)+"\n" +
    "photo2:"+JSON.stringify(Object.values(issues[2])).slice(2,-2)+"\n" +
    "reportphoto:"+JSON.stringify(Object.values(issues[3])).slice(2,-2)+"\n" +
    "rating:"+JSON.stringify(Object.values(issues[4])).slice(2,-2)+"\n" +
    "remark:"+JSON.stringify(Object.values(issues[5])).slice(2,-2)+"\n" +
    "issueno:"+num ;
    client.sendMessage("917718959200@c.us", dataforward);
    client.sendMessage(recipientPhone, dataforward);    
}

    }})

//PEST CONTROL END





//HR ISSUE START HERE

const apmlhrsession= new Map();




var apmlhrmobilenumber = [];
var apmlhrkey = [];
var fetchapmlhrGooglesheet= {

url: "https://script.google.com/macros/s/AKfycbzXabu-CTVxDws33EAr-J5YoGf9l4aR144PESWzsQlP8oDWWP_FRN2s4ss4uFQHq_P3/exec",
headers: {
'Cookie':
'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA'
},
};





setInterval(function () {
axios(fetchapmlhrGooglesheet)
.then(function (response) {

  apmlhrmobilenumber.splice(0, apmlhrmobilenumber.length);
  apmlhrkey.splice(0, apmlhrkey.length);

for (let i = 0; i < response.data.data.length; i++) {
apmlhrmobilenumber.push(response.data.data[i][0].toString())
apmlhrkey.push(response.data.data[i][1].toString())
}
//counting no. of drivers
numberofapmlhr = response.data.data.length
})
.catch(function (error) {
console.log(error);

});
console.log("apmlhrmobilenumber updated")
console.log(apmlhrmobilenumber)
}, 60000);








var axios = require('axios');




client.on('message', async msg => {
console.log('MESSAGE RECEIVED', msg);

let incomingMessage = msg;

let recipientPhone = incomingMessage.from; // extract the phone number of sender
let recipientName = incomingMessage.author;
let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
let timestamp = incomingMessage.timestamp

if (!apmlhrsession.get(recipientPhone)) {
apmlhrsession.set(recipientPhone, {
cart: [],
});
}

//Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

var indexof = apmlhrmobilenumber.indexOf(
String(recipientPhone).substring(2, 12)
);


let listOfIssuesInCart = ({ recipientPhone }) => {
let total = 0;
let issues = apmlhrsession.get(recipientPhone).cart;

let count = issues.length;
return { issues, count };
}
let numberOfIssuesInCart = listOfIssuesInCart({
recipientPhone,
}).count;


let addToapmlhrBotCart = async ({ data, value, recipientPhone }) => {
if (value == "a") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "b") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "c") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "d") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "e") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "f") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "g") {
apmlhrsession.get(recipientPhone).cart.push({ text: data });
}

}
var TF9 = false;
  TF9 = apmlhrmobilenumber.includes(
    String(recipientPhone).substring(2, 12)
  );
  console.log(incomingMessage.body.toUpperCase()==="APMLHUB","asdfhgbsajdgfboisgadfibsadfbksbdfjsdljkhf")
 
 
  if (msg.type === "chat") {

    if (incomingMessage.body.toUpperCase() === "APMLHR") {
      // console.log(String(recipientPhone).substring(2, 12));
      apmlhrsession.get(recipientPhone).cart = [];
      let data = incomingMessage.body.toUpperCase();
      let value = "a";
      await addToapmlhrBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      const media = await MessageMedia.fromUrl(
        "https://www.truckingcube.com/images/safety-1.jpg"
      );
      await client.sendMessage(recipientPhone, media);
      await client.sendMessage(
        recipientPhone,
        "Jai Hind , \n\nSELECT TYPE OF ISSUE\n\n1)HR ONE not Working\n(2)Attendance Correction\n(3)New Requirement\n(4)Forget HR ONE Punching\n(5)Salary Deducted\n(6)Salary Not Received\n(7)Attendance Not Update\n(8)Shift Change\n(9)PF,ESIC Issues\n(10)F AND F Issue\n(11)Salary Slip\n(12)Appointment Letter\n(13)FORM-16\n(14)Other"
      );
      // console.log(apmlhrsession.get(recipientPhone).cart[0].a);
    } else if (incomingMessage.body.toUpperCase().includes("RES ")) {


                          var date = new Date();
              var options = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              };
              var dateString = date.toLocaleString('en-GB', options);
              


   
      var data111 = JSON.stringify({
        datetime: dateString.replace(', ', ' ') ,
        issueno: msg.body.substring(4),
        
        resolvedNo: String(recipientPhone).substring(2, 12),
      });

      // console.log("mil gaya");
      // console.log(msg.body, ":aWDAWDWDWDAWD");
      var axios = require("axios");
      var config221 = {
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbwmRBcGU_ZDOfVfzwy2rWBiKClXLUBhtqMeSbL_HXUzki5W2pCt_7P5US1J0Ojgri0I/exec?action=addUser",
        headers: {
          "Content-Type": "application/json",
          Cookie:
            "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
        },
        data: data111,
      };

      axios(config221);

      client.sendMessage(recipientPhone, "We have closed the issue . Thankyou");
    } else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
      // console.log(String(recipientPhone).substring(2, 12));
      let data = incomingMessage.body;
      let value = "b";
      await addToapmlhrBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      await client.sendMessage(recipientPhone, "SEND APM CODE");
    } else if (numberOfIssuesInCart === 2 && msg.type === "chat") {
      // console.log(String(recipientPhone).substring(2, 12));
      let data = incomingMessage.body;
      let value = "c";
      await addToapmlhrBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      await client.sendMessage(recipientPhone, "ENTER REMARK ");
    }else if (numberOfIssuesInCart === 3 && msg.type === "chat") {
      // console.log(String(recipientPhone).substring(2, 12));
      let data = incomingMessage.body;
      let value = "d";
      await addToapmlhrBotCart({ data, value, recipientPhone });
      let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
      }).count;
      // await console.log(numberOfIssuesInCart);
      const { MessageMedia } = require("whatsapp-web.js");
      await client.sendMessage(recipientPhone, "SEND THE PHOTO");
    }
  }
  if (msg.type === "image" && numberOfIssuesInCart === 4) {
    // console.log("hi");
    const media = await msg.downloadMedia();
    // await console.log(media.mimetype, media.filename, media.data.length);
    const imageDataURI = require("image-data-uri");
    const imageFileName = "new_image";
    const fs = require("fs");

    var imgname = "apmlhr" + Math.floor(100000 + Math.random() * 900000);
    const datauri = "data:image/jpeg;base64," + media.data.toString("base64");
    await fs.writeFileSync("abc" + ".txt", datauri);
    await imageDataURI.outputFile(datauri, imgname + ".jpeg");
    var axios = require("axios");
    var FormData = require("form-data");
    var dataz = new FormData();
    dataz.append(
      "file",
      fs.createReadStream(
        "C:/Users/Apml/Desktop/Code/deployed/whatsappbots/webjs/" +
          imgname +
          ".jpeg"
      )
    );
    var config = {
      method: "post",
      url: "http://localhost:9001/uploads",
      headers: {
        ...dataz.getHeaders(),
      },
      data: dataz,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        url = response.data.data;
        // console.log(url);
        let data = url;
        var num = Math.floor(Math.random() * 90000) + 10000;
        let value = "e";
        addToapmlhrBotCart({ data, value, recipientPhone });
        let issues = apmlhrsession.get(recipientPhone).cart;
        // console.log(issues);
                            var date = new Date();
        var options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        var dateString = date.toLocaleString('en-GB', options);
        var dataz = JSON.stringify({
          datetime: dateString.replace(', ', ' ') ,
          issue: JSON.stringify(Object.values(issues[1])).slice(2, -2),
          issuebranch: JSON.stringify(Object.values(issues[2])).slice(2, -2),
         
          image: JSON.stringify(Object.values(issues[4])).slice(2, -2),

          issueno: num,
          key: String(recipientPhone).substring(2, 12),
          remark: JSON.stringify(Object.values(issues[3])).slice(2, -2),
        });

        var config231 = {
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbwDSFcI6Cbp8HiygAvECBjKxNTdNz59uCxFTUGAqekcnrXlP38eFPpZGQ8awmV0ufc/exec?action=addUser",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA",
          },
          data: dataz,
        };
        var axios = require("axios");
        axios(config231)
          .then(function (response) {
            client.sendMessage(
              recipientPhone,
              " \n-------------------------------------------------------\n   *Thank you we have registered your details* \n-------------------------------------------------------\n"
            );
            // console.log(JSON.stringify(response.data));

            ///fwd strt
            let issues2 = apmlhrsession.get(recipientPhone).cart;

            var list = [
              "(1)HR ONE not Working",
              "(2)Attendance Correction",
              "(3)New Requirement",
              "(4)Forget HR ONE Punching",
              "(5)Salary Deducted",
              "(6)Salary Not Received",
              "(7)Attendance Not Update",
              "(8)Shift Change",
              "(9)PF,ESIC Issues",
              "(10)F AND F Issue",
              "(11)Salary Slip",
              "(12)Appointment Letter",
              "(13)FORM-16",
              "(14)Other",
            ];
            var value =
              "(" +
              JSON.stringify(Object.values(issues2[1])).slice(2, -2) +
              ")";

            for (var i = 0; i < list.length; i++) {
              if (list[i].includes(value)) {
                // console.log(list[i]);
                var issuedetail = list[i];
              }
            }

            ///fwd end

            let issues = apmlhrsession.get(recipientPhone).cart;
            var dataforward =
              "Datetime: " +
              new Date().toLocaleString() +
              "\n" +
              "Issue: " +
              issuedetail +
              "\n" +
              "Issuebranch: " +
              JSON.stringify(Object.values(issues[2])).slice(2, -2) +
              "\n" +
              "Issueno: " +
              num +
              "\n" +
 "remark: "+  JSON.stringify(Object.values(issues[3])).slice(2, -2) +
              "\n" +
              "By: " +
              String(recipientPhone).substring(2, 12);
            // console.log(dataz, "ooooo");
            const { MessageMedia } = require("whatsapp-web.js");
            var media1 = JSON.stringify(Object.values(issues[4])).slice(2, -2);
            // console.log(media1, "media1");
            const media2 = MessageMedia.fromUrl(media1);
            // console.log(media2, "asdfff");
            client.sendMessage("917718959200@c.us", media);
            client.sendMessage("917718959200@c.us", dataforward);
          })
          .catch(function (error) {
            // console.log(error);
          }); // var config = { //   method: 'post', //   url: 'http://localhost:4000/todos/add', //   headers: { //     'Content-Type': 'application/json' //   }, //   data : data12 // };
        //           var axios = require('axios');
        //     var data12 = JSON.stringify({
        //       "datetime": new Date().toLocaleString(),
        //       "name": JSON.stringify(Object.values(issues[1])).slice(2,-2),
        //       "personname": JSON.stringify(Object.values(issues[2])).slice(2,-2),
        //       "personcontact": JSON.stringify(Object.values(issues[3])).slice(2,-2),
        //       "persondesignation": JSON.stringify(Object.values(issues[4])).slice(2,-2),
        //       "personemail": JSON.stringify(Object.values(issues[5])).slice(2,-2),
        //       "location": JSON.stringify(Object.values(issues[6])).slice(2,-2),
        //       "image": JSON.stringify(Object.values(issues[7])).slice(2,-2),
        //       "key": String(recipientPhone).substring(2, 12)
        //     });
        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // console.log(error);
          });
        // console.log(numberOfIssuesInCart);
      })
      .catch(function (error) {
        // console.log(error);
      });
  } 
});

// HR ISSUE END HERE



// apml order starts here

const apmlordersession = new Map();




var apmlordermobilenumber = [];
var apmlorderkey = [];
var fetchapmlorderGooglesheet= {

url: "https://script.google.com/macros/s/AKfycbx1BllZlLXZMC_4MPRiQpcPDJD-s5X50FZXVFTJKSG7VNPNP8y04M9nBOfaVRJmdhWP/exec",
headers: {
'Cookie':
'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA'
},
};





setInterval(function () {
axios(fetchapmlorderGooglesheet)
.then(function (response) {
for (let i = 0; i < response.data.data.length; i++) {
apmlordermobilenumber.push(response.data.data[i][0].toString())
apmlorderkey.push(response.data.data[i][1].toString())
}
//counting no. of drivers
numberofapmlorder = response.data.data.length
})
.catch(function (error) {
console.log(error);

});
console.log("apmlordermobilenumber updated")
console.log(apmlordermobilenumber)
}, 60000);







var axios = require('axios');



client.on('message', async msg => {
console.log('MESSAGE RECEIVED', msg);

let incomingMessage = msg;

let recipientPhone = incomingMessage.from; // extract the phone number of sender
let recipientName = incomingMessage.author;
let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
let timestamp = incomingMessage.timestamp

if (!apmlordersession.get(recipientPhone)) {
apmlordersession.set(recipientPhone, {
cart: [],
});
}

//Matching Whatsapp  number with  Master googlesheet number and storing its Index Velue in variable

var indexof = apmlordermobilenumber.indexOf(
String(recipientPhone).substring(2, 12)
);


let listOfIssuesInCart = ({ recipientPhone }) => {
let total = 0;
let issues = apmlordersession.get(recipientPhone).cart;

let count = issues.length;
return { issues, count };
}
let numberOfIssuesInCart = listOfIssuesInCart({
recipientPhone,
}).count;


let addToapmlorderBotCart = async ({ data, value, recipientPhone }) => {
if (value == "text") {
apmlordersession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "b") {
apmlordersession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "c") {
apmlordersession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "d") {
apmlordersession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "e") {
apmlordersession.get(recipientPhone).cart.push({ text: data });
}
else if (value == "f") {
    apmlordersession.get(recipientPhone).cart.push({ text: data });
    }
else if (value == "g") {
    apmlordersession.get(recipientPhone).cart.push({ text: data });
    }
    else if (value == "h") {
        apmlordersession.get(recipientPhone).cart.push({ text: data });
        }
        else if (value == "i") {
            apmlordersession.get(recipientPhone).cart.push({ text: data });
            }
            else if (value == "j") {
                apmlordersession.get(recipientPhone).cart.push({ text: data });
                }
                else if (value == "k") {
                    apmlordersession.get(recipientPhone).cart.push({ text: data });
                    }
                    else if (value == "l") {
                        apmlordersession.get(recipientPhone).cart.push({ text: data });
                        }
                        else if (value == "m") {
                            apmlordersession.get(recipientPhone).cart.push({ text: data });
                            }
                            else if (value == "n") {
                                apmlordersession.get(recipientPhone).cart.push({ text: data });
                                }
            






}



var TF10 = false;
TF10 = apmlordermobilenumber.includes(
String(recipientPhone).substring(2, 12)
);

if (TF10) {

    if (msg.type === "chat") {
    if (incomingMessage.body.toUpperCase() === "APMLORDER") {
    
    console.log(String(recipientPhone).substring(2, 12))
    apmlordersession.get(recipientPhone).cart = [];
    
    
    let data ;
    
    for (let i = 0; i < apmlordermobilenumber.length; i++) {
        if (apmlordermobilenumber[i] === String(recipientPhone).substring(2, 12)) {
          data = apmlorderkey[i];
          break;
        }
      }
        let value = "text";
      console.log(data,"SADSADSADSAD"); 
              await addToapmlorderBotCart({ data, value, recipientPhone });
              let numberOfIssuesInCart = listOfIssuesInCart({
                recipientPhone,
              }).count;



    await console.log(numberOfIssuesInCart)
    const { MessageMedia } = require('whatsapp-web.js');
    const media = await MessageMedia.fromUrl('https://i.ibb.co/kDwh0Gr/Whats-App-Image-2022-09-05-at-04-39-59.jpg');
    await client.sendMessage(recipientPhone, media);
    await client.sendMessage(recipientPhone, "Jai Hind 🇮🇳🇮🇳🇮🇳, \n\n⚠️ Welcome to APML-ORDER \n\n ENTER FROM WHICH PLACE -----")
    
    
    console.log(apmlordersession.get(recipientPhone).cart[0])
    console.log(apmlordersession.get(recipientPhone).cart[1])
    }
    else if (numberOfIssuesInCart === 1 && msg.type === "chat") {
        console.log(String(recipientPhone).substring(2, 12))
        
        
        
        let data = incomingMessage.body;
        
        let value = "b";
        await addToapmlorderBotCart({ data, value, recipientPhone });
        
        let numberOfIssuesInCart = listOfIssuesInCart({
        recipientPhone,
        }).count;
        await console.log(numberOfIssuesInCart)
        const { MessageMedia } = require('whatsapp-web.js');
        
        await client.sendMessage(recipientPhone,"ENTER DESTINATION TO ____")
        
        
        
        } 
        else if (numberOfIssuesInCart === 2 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "c";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"ENTER LENGTH")
        }
        else if (numberOfIssuesInCart === 3 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "d";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"ENTER WIDTH")
        }
        else if (numberOfIssuesInCart === 4 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "e";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"ENTER HEIGHT")
        }
        
        else if (numberOfIssuesInCart === 5 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "f";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"ENTER CFT WEIGHT")
        }
      
        
        else if (numberOfIssuesInCart === 6 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "g";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"ENTER TRANSPORTER NAME____")
        }
        else if (numberOfIssuesInCart === 7 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "h";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"  ENTER TRANSPORTER MOBILE NO.")
        }
        else if (numberOfIssuesInCart === 8 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "i";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"EXCLUDING OR INCLUDING CHALLAN")
        }
        
        else if (numberOfIssuesInCart === 9 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "j";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone," ENTER RATE")
        }
        else if (numberOfIssuesInCart === 10 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            let value = "k";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"ENTER VEHICLE TYPE")
        }
        else if (numberOfIssuesInCart === 11 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "l";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone," ENTER VEHICLE NO.")
        }
        else if (numberOfIssuesInCart === 12 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "m";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone," ENTER DRIVER MOBILE NO.")
        }
        else if (numberOfIssuesInCart === 13 && msg.type === "chat") {
            console.log(String(recipientPhone).substring(2, 12))
            
            
            
            let data = incomingMessage.body;
            
            let value = "n";
            await addToapmlorderBotCart({ data, value, recipientPhone });
            
            let numberOfIssuesInCart = listOfIssuesInCart({
            recipientPhone,
            }).count;
            await console.log(numberOfIssuesInCart)
            const { MessageMedia } = require('whatsapp-web.js');
            
            await client.sendMessage(recipientPhone,"THANK YOU WE HAVE REGISTER YOUR DETAIL")
        
            let issues = apmlordersession.get(recipientPhone).cart;

            var num = Math.floor(Math.random() * 90000) + 10000;
            var dataz1 = JSON.stringify({
                "datetime": new Date().toLocaleString(),
                "fro": JSON.stringify(Object.values(issues[1])).slice(2,-2),
                "to": JSON.stringify(Object.values(issues[2])).slice(2,-2),
                "length": JSON.stringify(Object.values(issues[3])).slice(2,-2),
                "width": JSON.stringify(Object.values(issues[4])).slice(2,-2),
                "height": JSON.stringify(Object.values(issues[5])).slice(2,-2),
                "weight": JSON.stringify(Object.values(issues[6])).slice(2,-2),
                "transportername": JSON.stringify(Object.values(issues[7])).slice(2,-2),
                "transportermobileno": JSON.stringify(Object.values(issues[8])).slice(2,-2),
                "exorin": JSON.stringify(Object.values(issues[9])).slice(2,-2),
                "rate": JSON.stringify(Object.values(issues[10])).slice(2,-2),
                "vehicletype": JSON.stringify(Object.values(issues[11])).slice(2,-2),
                "vehicleno": JSON.stringify(Object.values(issues[12])).slice(2,-2),
                "driverno": JSON.stringify(Object.values(issues[13])).slice(2,-2),
                 "loadedby": JSON.stringify(Object.values(issues[0])).slice(2,-2),
                "issueno": num   })
                console.log (dataz1,"gkugiugo")
                var config231 = {
                  method: 'post',
                  url: 'https://script.google.com/macros/s/AKfycbye5D2oMgykFHf1faKPyP4pgp3sP8Dkvlet-ezoq_q5H4pzgO2PQ8rcfumrPGBClEW5/exec?action=addUser',
                  headers: {
                      'Content-Type': 'application/json',
                      'Cookie': 'NID=511=oDzBMbwuX12Cfg15osg66Wg4_E49_96TOcXuyIGuh4dkk9QPibfKPj5t0-kmSeMX9HuGETq0cf2MXz8cPXddQYtETb96GhAMsNMMS3Zi8MM6PsX7dByPDa828MdUwiOnMuOu0gm8LpftQuxQO-EXwSr6t6FCj2pKgfMpEifT2IA'
                    },
                    data : dataz1
                  };
                  var axios = require('axios');
                  axios(config231)
                  .then(function (response) {
                  console.log(JSON.stringify(response.data))
                   
                              
                          })
                        }
            
            
            
            
                
                               
                        }}})
                        



// apml order ends here






















client.initialize();

function GetFullName1(_a) {
  var countFrom = new Date(_a).getTime();
  this.now = new Date();
  this.b = new Date(countFrom);
  this.distance = this.now - this.b;

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  let days = Math.floor((this.distance / secondsInADay) * 1);
  let hours = Math.floor(
    ((this.distance % secondsInADay) / secondsInAHour) * 1
  );
  let mins = Math.floor(
    (((this.distance % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
  );
  let secs = Math.floor(
    ((((this.distance % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1
  );
  let xyz = days + " d " + hours + " h";
  if (days > 1924) {
    return "⚫";
  }
  return xyz;
}

function millisToMinutesAndSeconds(millis) {
  var countFrom = new Date(millis).getTime();
  var now = new Date();

  var distance = now.getTime() - countFrom;
  var minutes = Math.floor(distance / 60000);
  var seconds = Number(((distance % 60000) / 1000).toFixed(0));
  var gg = seconds < 10 ? "0" : "";
  var xyz = minutes + "m " + gg + seconds + "s";
  var classs = minutes < 15 ? "myStyle" : "newStyle";
  return { xyz, classs };
}

function GetFullName(a) {
  var now = new Date();
  var b = new Date(a);
  if (b == "Invalid Date") {
    return "null";
  } else {
    var distance = now - b;

    var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

    let days = Math.floor((distance / secondsInADay) * 1);
    let hours = Math.floor(((distance % secondsInADay) / secondsInAHour) * 1);
    let mins = Math.floor(
      (((distance % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
    );

    let xyz = days + "d " + hours + "h " + mins + "m ";
    return xyz;
  }
}
function kbd(a) {
  var y = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "VehicleDescription") {
      console.log("hellllp",a[i]['fieldKey'])
      y = a[i].value;
      break;
    }
  }

  return y;
}
