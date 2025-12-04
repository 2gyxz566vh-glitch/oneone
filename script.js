// script.js - 简单交互：移动菜单、表单验证与年号
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? 'none' : 'flex';
  });

  // simple form handler
  const form = document.getElementById('contact-form');
  const result = form.querySelector('.form-result');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      result.textContent = '请填写所有字段。';
      return;
    }
    // basic email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!re.test(email)){
      result.textContent = '请输入有效的邮箱地址。';
      return;
    }
    result.textContent = '已发送！（演示用 — 真正部署请接入后端或第三方表单服务）';
    form.reset();
  });
});
