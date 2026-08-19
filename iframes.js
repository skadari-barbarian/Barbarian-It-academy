const TOTAL = 15;
  let current = 0;

  // Store loaded file URLs per slide index
  const loadedFiles = new Array(TOTAL).fill(null);

  const slideNames = [
    "Introduction",
    "What is Typography?",
    "Font Family",
    "Size & Weight",
    "Style & Alignment",
    "Decoration & Transform",
    "Letter & Word Spacing",
    "Line Height",
    "Text Shadow",
    "Custom Fonts (@font-face)",
    "White-space & Text-overflow",
    "Overflow-wrap & Text-indent",
    "Live Practice",
    "Cheat Sheet",
    "Conclusion"
  ];

  const frame = document.getElementById('demo-frame');
  const placeholder = document.getElementById('placeholder');
  const contentTitle = document.getElementById('content-title');
  const filePath = document.getElementById('file-path');
  const slideCounter = document.getElementById('slide-counter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const filePicker = document.getElementById('file-picker');

  function selectSlide(index) {
    // Update sidebar active state
    document.querySelectorAll('.slide-item').forEach(el => el.classList.remove('active'));
    document.querySelector(`.slide-item[data-index="${index}"]`).classList.add('active');

    current = index;
    contentTitle.textContent = `Slide ${index + 1} — ${slideNames[index]}`;
    slideCounter.textContent = `Slide ${index + 1} / ${TOTAL}`;

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === TOTAL - 1;

    // Reset file picker
    filePicker.value = '';

    // Show loaded file or placeholder
    if (loadedFiles[index]) {
      showFrame(loadedFiles[index].url, loadedFiles[index].name);
    } else {
      showPlaceholder();
    }
  }

  function showPlaceholder() {
    frame.style.display = 'none';
    placeholder.style.display = 'flex';
    filePath.textContent = 'No file loaded — select your HTML file above';
    placeholder.innerHTML = `
      <div class="icon">📂</div>
      <h2>No file loaded yet</h2>
      <p>Click <strong>"Load File"</strong> above to pick your <code>slide${current + 1}.html</code> from your laptop.</p>
      <p>It will display here inside the iframe.</p>
    `;
  }

  function showFrame(url, name) {
    placeholder.style.display = 'none';
    frame.style.display = 'block';
    frame.src = url;
    filePath.textContent = `📄 ${name}`;
  }

  function loadFile() {
    const file = filePicker.files[0];
    if (!file) {
      alert('Please select an HTML file first!');
      return;
    }

    const url = URL.createObjectURL(file);

    // Free old URL if exists
    if (loadedFiles[current] && loadedFiles[current].url) {
      URL.revokeObjectURL(loadedFiles[current].url);
    }

    loadedFiles[current] = { url, name: file.name };
    showFrame(url, file.name);
  }

  function navigate(dir) {
    const next = current + dir;
    if (next >= 0 && next < TOTAL) {
      selectSlide(next);
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
  });

  // Init
  selectSlide(0);