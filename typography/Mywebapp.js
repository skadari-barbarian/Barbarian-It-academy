(function () {

      var courses = {
        html: {
          label: 'HTML',
          sideDesc: 'HTML basics — coming soon',
          exampleTitle: 'My HTML Practice',
          topics: [
            ["01", "Opening", "slides/htmlintro.html"],
            ["02","block-level Html","slides/block.html"],
            ["03","Inline-level Html","slides/inline.html"],
            ["04","Forms","slides/form.html"],
            ["05","accessibility","slides/accessibility.html"]

          ],
          panelId: 'htmlPanel'
        },
        css: {
          label: 'CSS',
          sideDesc: 'Typography, Position, Border, Flexbox & Grid',
          exampleTitle: 'My CSS Practice',
          topics: [
            ["01", "Opening", "slides/slide1.html"],
            // — Typography —
            ["02", "What is CSS Typography?", "slides/slide2.html"],
            ["03", "Font Family", "slides/slide3.html"],
            ["04", "Font Size", "slides/slide4.html"],
            ["05", "Font Weight", "slides/slide5.html"],
            ["06", "Font Style", "slides/slide6.html"],
            ["07", "Text Decoration", "slides/slide7.html"],
            ["08", "Text Transform", "slides/slide8.html"],
            ["09", "Line Height", "slides/slide9.html"],
            ["10", "Letter & Word Spacing", "slides/slide10.html"],
            ["11", "Text Align", "slides/slide11.html"],
            ["12", "Text Shadow", "slides/slide12.html"],
            ["13", "@font-face", "slides/slide14.html"],
            ["14", "White-space & Overflow", "slides/slide15.html"],
            // — Position —
            ["15", "CSS Position", ""],
            ["16", "What is CSS Position?", "slides/pzb.html"],
            ["17", "Position: Static", "slides/static.html"],
            ["18", "Position: Relative", "slides/relative.html"],
            ["19", "Position: Absolute", "slides/absolute.html"],
            ["20", "Position: Fixed", "slides/fixed.html"],
            ["21", "Position: Sticky", "slides/sticky.html"],
            // — z-index —
            ["22", "z-index", "slides/zindex.html"],
            // — Border —
            ["23", "Border Width", "slides/border-width.html"],
            ["24", "Border Style", "slides/border-style.html"],
            ["25", "Border Color", "slides/border-color.html"],
            ["26", "Border Radius", "slides/border-radius.html"],
            // — Flexbox —
            ["27", "Display: Flex", "slides/flex.html"],
            ["28", "Teaser Using Flex", "slides/teaser2.html"],
            // — Grid —
            ["29", "Grid Layout", "slides/grid.html"],
            ["30", "Teaser using grid", "slides/teasergrid.html"],
            ["31", "Grid Layout Task", "slides/mode.html"]
          ],
          panelId: 'cssPanel'
        },
        express: {
          label: 'Express.js',
          sideDesc: 'Express.js + your practiced code',
          exampleTitle: 'My Express Practice',
          topics: [
            ["01", "Opening", ""],
            ["02", "What is Express.js?", ""],
            ["03", "Express Basics", ""],
            ["04", "Localhost & 127.0.0.1", ""],
            ["05", "Running Two Servers", "slides/express/public1/index1.html"],
            ["06", "Location API", "slides/express/location-api.html"],
            ["07", "Iframes in Express", "slides/express/public1/index1.html"],
            ["08", "Browser Security", "slides/express/public1/index1.html"],
            ["09", "Preventing Iframes", "slides/express/prevent-iframes.html"],
            ["10", "Helmet.js", "slides/express/helmet.html"]
          ],
          panelId: 'expressPanel'
        },
        js: {
          label: 'JavaScript',
          sideDesc: 'JavaScript practice',
          exampleTitle: 'My JS Practice',
          topics: [
            ["01", "JS Variables", "slides/variables.html"],
            ["02", "JavaScript task", "slides/examplepage.html"],
            ["03", "Sync and Async JS", "slides/javascript.html"],
            ["04", "Arrays in java script", "slides/arrays.js"],
            ["05", "JS OBJECTS", "slides/objects.html"],
            ["06", "JSon", "slides/json.html"],
            ["07", "promises", "slides/promise.js"],
            ["08", "events", "slides/events.html"]
          ],
          panelId: 'jsPanel'
        },
        examples: {
          label: 'Examples',
          sideDesc: 'Practical projects & tasks',
          exampleTitle: 'My Example Practice',
          topics: [
            ["01", "Car Cartoon (Intro)", "slides/car.html"],
            ["02", "Car Cartoon (Colors)", "slides/carjs.html"],
            ["03", "Face Cartoon", "slides/face.html"],
            ["04", "Simple Header Task", "slides/page.html"],
            ["05", "Teaser Component", "slides/teaser2.html"],
            ["06", "Teaser Using Modifiers", "slides/Modifiers.html"],
            ["07", "media queries(mobile)", "slides/mobile1.html"],
            ["08", "media queries(desktop)", "slides/desktop1.html"]
          ],
          panelId: 'examplesPanel'
        }
      };

      var activeCourse = 'html';
      var current = 0;
      var exampleOpen = false;

      var navEl = document.getElementById('nav');
      var topTitle = document.getElementById('topTitle');
      var toolTitle = document.getElementById('toolTitle');
      var counter = document.getElementById('counter');
      var countTop = document.getElementById('countTop');
      var fillEl = document.getElementById('fill');
      var examplePanel = document.getElementById('examplePanel');
      var frame = document.getElementById('exampleFrame');
      var fileLabel = document.getElementById('fileName');
      var exBtn = document.getElementById('exampleButton');
      var prevBtn = document.getElementById('prev');
      var nextBtn = document.getElementById('next');
      var sideDesc = document.getElementById('sideDesc');
      var examplePanelTitle = document.getElementById('examplePanelTitle');

      function getActivePanel() {
        return document.getElementById(courses[activeCourse].panelId);
      }

      function getSlides() {
        return getActivePanel().querySelectorAll('.slide');
      }

      function buildNav() {
        navEl.innerHTML = '';
        var topics = courses[activeCourse].topics;
        for (var i = 0; i < topics.length; i++) {
          (function (idx) {
            var item = document.createElement('div');
            item.className = 'nav-item' + (idx === current ? ' active' : '');
            item.innerHTML = '<span class="number">' + topics[idx][0] + '</span><span class="nav-name">' + topics[idx][1] + '</span>';
            item.addEventListener('click', function () { goTo(idx); });
            navEl.appendChild(item);
          })(i);
        }
      }

      function goTo(index) {
        var slides = getSlides();
        var topics = courses[activeCourse].topics;
        if (index < 0 || index >= topics.length) return;

        slides.forEach(function (s) { s.classList.remove('active'); });
        slides[index].classList.add('active');

        var navItems = navEl.querySelectorAll('.nav-item');
        navItems.forEach(function (n) { n.classList.remove('active'); });
        if (navItems[index]) {
          navItems[index].classList.add('active');
          navItems[index].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }

        current = index;
        getActivePanel().scrollTop = 0;

        if (exampleOpen) {
          frame.src = topics[current][2] || 'about:blank';
          fileLabel.textContent = topics[current][2] || 'No example page';
        }
        updateUI();
      }

      function updateUI() {
        var topics = courses[activeCourse].topics;
        var total = topics.length;
        var num = current + 1;
        var pad = num < 10 ? '0' + num : '' + num;
        topTitle.textContent = topics[current][1];
        toolTitle.textContent = topics[current][1];
        counter.textContent = pad + ' / ' + total;
        countTop.textContent = pad + ' / ' + total;
        fillEl.style.width = (num / total * 100) + '%';
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === total - 1;
      }

      window.switchCourse = function (courseKey) {
        if (courseKey === activeCourse) return;

        if (exampleOpen) {
          exampleOpen = false;
          examplePanel.classList.remove('open');
          exBtn.classList.remove('open');
          exBtn.textContent = '⊕ Open My Example';
          setTimeout(function () { frame.src = 'about:blank'; }, 360);
        }

        document.getElementById(courses[activeCourse].panelId).classList.remove('active-course');
        document.getElementById(courses[activeCourse].panelId).classList.remove('split');

        activeCourse = courseKey;
        current = 0;
        var newPanel = document.getElementById(courses[activeCourse].panelId);
        newPanel.classList.add('active-course');

        var slides = newPanel.querySelectorAll('.slide');
        slides.forEach(function (s) { s.classList.remove('active'); });
        if (slides[0]) slides[0].classList.add('active');

        sideDesc.textContent = courses[activeCourse].sideDesc;
        examplePanelTitle.textContent = courses[activeCourse].exampleTitle;

        document.getElementById('btnHTML').classList.toggle('active', courseKey === 'html');
        document.getElementById('btnCSS').classList.toggle('active', courseKey === 'css');
        document.getElementById('btnExpress').classList.toggle('active', courseKey === 'express');
        document.getElementById('btnJS').classList.toggle('active', courseKey === 'js');
        document.getElementById('btnExamples').classList.toggle('active', courseKey === 'examples');
        buildNav();
        updateUI();
      };

      exBtn.addEventListener('click', function () {
        exampleOpen = !exampleOpen;
        var panel = getActivePanel();
        panel.classList.toggle('split', exampleOpen);
        examplePanel.classList.toggle('open', exampleOpen);
        exBtn.classList.toggle('open', exampleOpen);
        if (exampleOpen) {
          exBtn.textContent = '× Close My Example';
          frame.src = courses[activeCourse].topics[current][2] || 'about:blank';
          fileLabel.textContent = courses[activeCourse].topics[current][2] || 'No example page';
        } else {
          exBtn.textContent = '⊕ Open My Example';
          setTimeout(function () { frame.src = 'about:blank'; }, 360);
        }
      });

      prevBtn.addEventListener('click', function () { goTo(current - 1); });
      nextBtn.addEventListener('click', function () { goTo(current + 1); });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
      });

      buildNav();
      updateUI();
    })();

    function showLoc(prop) {
      var out = document.getElementById('locOutput');
      out.textContent = 'location.' + prop + ' = "' + location[prop] + '"';
    }

    function copyCode(id) {
      var el = document.getElementById(id);
      var text = el.innerText.replace('Copy', '').trim();
      navigator.clipboard.writeText(text).then(function () {
        var btn = el.querySelector('.copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    }

    function toggleFloatingButton() {
      var button = document.getElementById('fixedButtonDemo');
      if (button) { button.remove(); return; }
      button = document.createElement('button');
      button.id = 'fixedButtonDemo';
      button.textContent = '↑';
      Object.assign(button.style, {
        position: 'fixed', right: '22px', bottom: '76px',
        width: '48px', height: '48px', border: 'none',
        borderRadius: '50%', background: '#ff4400', color: 'white',
        cursor: 'pointer', fontSize: '1.2rem', fontWeight: '900',
        zIndex: '999', boxShadow: '0 0 20px #ff440099'
      });
      document.body.appendChild(button);
    }