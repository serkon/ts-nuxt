import Vue from 'vue';

/**
 * Usage:
 * <code v-str="'<el-button>Primary</el-button>'"></code>
 *
 * @param {*} str
 * @returns
 */
const StringConverter = function (str) {
  console.log('convertera geldi', this, str);
  // `str` parametresini HTML olarak kabul edip onu güvenli bir string'e dönüştürmelisiniz
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

Vue.directive('str', {
  bind: (el, binding) => {
    // `binding.value` ile elementin içeriğini alabilirsiniz
    const convertedString = StringConverter(binding.value);
    el.innerHTML = convertedString; // İçeriği güncelleyin
    el.style.opacity = '0';
    console.log('bind', el);
  },
  inserted: (el) => {
    el.style.opacity = '1';
    console.log('insert', el);
  },
  update: (el, binding) => {
    const convertedString = StringConverter(binding.value);
    el.innerHTML = convertedString;
    console.log('update', el);
  },
})
