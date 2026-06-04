/* ===== SHARED JS — LANDING PAGES ===== */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Form submission handler (N8N webhook)
function handleSubmit(formId, webhookUrl) {
  const form = document.getElementById(formId);
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    data.timestamp = new Date().toISOString();
    data.page = window.location.pathname;
    
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        form.innerHTML = '<div style="text-align:center;padding:2rem;"><h3 style="color:#10b981;">✅ Mensagem enviada!</h3><p>Retornaremos em até 24h.</p></div>';
      } else {
        throw new Error('Erro no servidor');
      }
    } catch (err) {
      form.innerHTML = '<div style="text-align:center;padding:2rem;"><h3 style="color:#ef4444;">❌ Erro ao enviar</h3><p>Tente novamente ou entre em contato pelo WhatsApp.</p></div>';
    }
  });
}

// WhatsApp redirect
function openWhatsApp(phone, message) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// FAQ accordion
document.querySelectorAll('.faq-item h3').forEach(h3 => {
  h3.addEventListener('click', () => {
    const p = h3.nextElementSibling;
    p.style.display = p.style.display === 'none' ? 'block' : 'none';
  });
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .step, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s, transform 0.6s';
  observer.observe(el);
});
