        document.querySelector('#D-CT-G').addEventListener('click', function () {
          document.querySelector('#model_skull').setAttribute("visible", "false");
          document.querySelector('#D-CT-G').setAttribute("visible", "false");
          document.querySelector('#D-CT-R').setAttribute("visible", "true");
        });

        document.querySelector('#D-CT-R').addEventListener('click', function () {
          document.querySelector('#model_skull').setAttribute("visible", "true");
          document.querySelector('#D-CT-G').setAttribute("visible", "true");
          document.querySelector('#D-CT-R').setAttribute("visible", "false");
        });

        document.querySelector('#D-MRA-G').addEventListener('click', function () {
          document.querySelector('#model_vessel').setAttribute("visible", "false");
          document.querySelector('#D-MRA-G').setAttribute("visible", "false");
          document.querySelector('#D-MRA-R').setAttribute("visible", "true");
        });

        document.querySelector('#D-MRA-R').addEventListener('click', function () {
          document.querySelector('#model_vessel').setAttribute("visible", "true");
          document.querySelector('#D-MRA-G').setAttribute("visible", "true");
          document.querySelector('#D-MRA-R').setAttribute("visible", "false");
        });

        document.querySelector('#D-T1-R').addEventListener('click', function () {
          document.querySelector('#model_pial').setAttribute("visible", "true");
          document.querySelector('#D-T1-G').setAttribute("visible", "true");
          document.querySelector('#D-T1-R').setAttribute("visible", "false");
        });

        document.querySelector('#D-T1-G').addEventListener('click', function () {
          document.querySelector('#model_pial').setAttribute("visible", "false");
          document.querySelector('#D-T1-G').setAttribute("visible", "false");
          document.querySelector('#D-T1-R').setAttribute("visible", "true");
        });

        document.querySelector('#D-DTI-R').addEventListener('click', function () {
          document.querySelector('#model_fiber').setAttribute("visible", "true");
          document.querySelector('#D-DTI-G').setAttribute("visible", "true");
          document.querySelector('#D-DTI-R').setAttribute("visible", "false");
        });

        document.querySelector('#D-DTI-G').addEventListener('click', function () {
          document.querySelector('#model_fiber').setAttribute("visible", "false");
          document.querySelector('#D-DTI-G').setAttribute("visible", "false");
          document.querySelector('#D-DTI-R').setAttribute("visible", "true");
        });


      




        document.querySelector('#C-CT-G').addEventListener('click', function () {
          document.querySelector('#CT').removeAttribute("keyboard-controls");
          document.querySelector('#C-CT-G').setAttribute("visible", "false");
          document.querySelector('#C-CT-R').setAttribute("visible", "true");
        });

        document.querySelector('#C-CT-R').addEventListener('click', function () {
          document.querySelector('#CT').setAttribute("keyboard-controls", "cameraUse:false");
          document.querySelector('#C-CT-G').setAttribute("visible", "true");
          document.querySelector('#C-CT-R').setAttribute("visible", "false");
        });

        document.querySelector('#C-MRA-G').addEventListener('click', function () {
          document.querySelector('#MRA').removeAttribute("keyboard-controls");
          document.querySelector('#C-MRA-G').setAttribute("visible", "false");
          document.querySelector('#C-MRA-R').setAttribute("visible", "true");
        });

        document.querySelector('#C-MRA-R').addEventListener('click', function () {
          document.querySelector('#MRA').setAttribute("keyboard-controls", "cameraUse:false");
          document.querySelector('#C-MRA-G').setAttribute("visible", "true");
          document.querySelector('#C-MRA-R').setAttribute("visible", "false");
        });



        document.querySelector('#C-T1-G').addEventListener('click', function () {
          document.querySelector('#T1').removeAttribute("keyboard-controls");
          document.querySelector('#C-T1-G').setAttribute("visible", "false");
          document.querySelector('#C-T1-R').setAttribute("visible", "true");
        });

        document.querySelector('#C-T1-R').addEventListener('click', function () {
          document.querySelector('#T1').setAttribute("keyboard-controls", "cameraUse:false");
          document.querySelector('#C-T1-G').setAttribute("visible", "true");
          document.querySelector('#C-T1-R').setAttribute("visible", "false");
        });

        document.querySelector('#C-DTI-G').addEventListener('click', function () {
          document.querySelector('#DTI').removeAttribute("keyboard-controls");
          document.querySelector('#C-DTI-G').setAttribute("visible", "false");
          document.querySelector('#C-DTI-R').setAttribute("visible", "true");
        });

        document.querySelector('#C-DTI-R').addEventListener('click', function () {
          document.querySelector('#DTI').setAttribute("keyboard-controls", "cameraUse:false");
          document.querySelector('#C-DTI-G').setAttribute("visible", "true");
          document.querySelector('#C-DTI-R').setAttribute("visible", "false");
        });