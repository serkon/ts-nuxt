<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <h1>Popover</h1>
    <section>
      <h2>Dropdown</h2>
      <p class="p-md-c my-6">Hover on the dropdown menu to unfold it for more actions.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link"> Dropdown List<i class="el-icon-arrow-down el-icon--right" /> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
          <el-button type="primary"> Dropdown List<i class="el-icon-arrow-down el-icon--right" /> </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button type="success" class="outline" size="small">
          Dropdown List
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-dropdown trigger="click"&gt; &lt;span&gt; Dropdown List &lt;/span&gt; &lt;el-dropdown-menu slot="dropdown"&gt; &lt;el-dropdown-item
            /&gt; &lt;/el-dropdown-menu&gt; &lt;/el-popover&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Popover with Table</h2>
      <p class="p-md-c my-6">Displays tables with popover content</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-popover placement="right" width="400" trigger="click">
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="date" />
            <el-table-column width="100" property="name" label="name" />
            <el-table-column width="300" property="address" label="address" />
          </el-table>
          <div class="popover-footer">
            <el-button>Cancel</el-button>
            <el-button>Save</el-button>
          </div>
          <el-button slot="reference" type="primary" size="small">Click to activate</el-button>
        </el-popover>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code> &lt;el-popover placement="right" width="400" trigger="click"&gt; &lt;el-table /&gt; &lt;/el-popover&gt; </code>
        </p>
      </div>

      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-popover placement="right" width="400" trigger="click"&gt; &lt;el-table /&gt; &lt;div class="popover-footer"&gt;
            &lt;el-button&gt;Cancel&lt;/el-button&gt; &lt;el-button&gt;Save&lt;/el-button&gt; &lt;/div&gt; &lt;/el-popover&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Temel Kullanım</h2>
      <p class="p-md-c my-6">
        Popover bileşeni, kullanıcının üzerine geldiğinde veya tıkladığında ek bilgileri veya eylemleri görüntülemek için kullanılır. Örneğinizde,
        farklı yönlere (sağ, alt, üst, sol) yerleştirilmiş dört popover örneği bulunmaktadır. Her bir popover, içeriğini ve başlığını göstermek için
        bir tetikleyici düğme (el-button) kullanmaktadır.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-popover placement="right" title="Başlık" width="200" trigger="click" content="Bu içerik, bu içerik, bu içerik">
          <el-button slot="reference">Sağ</el-button>
        </el-popover>
        <el-popover placement="bottom" title="Başlık" width="200" trigger="click" content="Bu içerik, bu içerik, bu içerik">
          <el-button slot="reference">Alt</el-button>
        </el-popover>
        <el-popover placement="top" title="Başlık" width="200" trigger="click" content="Bu içerik, bu içerik, bu içerik">
          <el-button slot="reference">Üst</el-button>
        </el-popover>
        <el-popover placement="left" title="Başlık" width="200" trigger="click" content="Bu içerik, bu içerik, bu içerik">
          <el-button slot="reference">Sol</el-button>
        </el-popover>
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-popover placement=&quot;right&quot; title=&quot;Başlık&quot; trigger=&quot;click&quot;&gt; &lt;el-button
            slot=&quot;reference&quot;&gt;Tıkla&lt;/el-button&gt; &lt;/el-popover&gt;
          </code>
        </p>
      </div>
    </section>

    <h1>TimePicker</h1>
    <section>
      <h2>Fixed time picker</h2>
      <p class="p-md-c my-6">
        Sabit Zaman Seçici, DateTimePicker bileşeninin bir parçasıdır ve kullanıcının belirli bir zaman aralığını seçmesine olanak tanır. DatePicker
        ve TimePicker'dan türetilmiştir ve kullanımı oldukça basittir.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-select v-model="value" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" placeholder="Zaman Seçin" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-select v-model=&quot;value&quot; :picker-options=&quot;{ start: '08:30', step: '00:15', end: '18:30'
            }&quot;&gt;&lt;/el-time-select&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Arbitrary time picker</h2>
      <p class="p-md-c my-6">
        Keyfi Zaman Seçici, etiket kullanarak el-time-picker'ı kullanmanıza ve seçilebilir zaman aralığını belirleyerek zamanı sınırlamanıza olanak
        tanır. Varsayılan olarak, zamanı seçmek için fare tekerleğini kullanabilirsiniz. Alternatif olarak, arrow-control özelliği
        etkinleştirildiğinde kontrol oklarını kullanabilirsiniz.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-picker v-model="value1" :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="Zaman Seçin" />
        <el-time-picker v-model="value2" arrow-control :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="Zaman Seçin" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-picker v-model=&quot;value1&quot; :picker-options=&quot;{ selectableRange: '18:30:00 - 20:30:00' }&quot;
            placeholder=&quot;Zaman Seçin&quot;&gt;&lt;/el-time-picker&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Fixed time range</h2>
      <p class="p-md-c my-6">
        Sabit Zaman Aralığı Seçici, belirli bir başlangıç ve bitiş zamanı arasında zaman seçmenizi sağlar. Özellikle etkinlik başlangıç ve bitiş
        zamanları gibi durumlar için uygundur. Başlangıç ve bitiş zamanlarını kolayca belirleyebilir ve özelleştirebilirsiniz.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-select v-model="startTime" placeholder="Başlangıç zamanı" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" />
        <el-time-select
          v-model="endTime"
          placeholder="Bitiş zamanı"
          :picker-options="{ start: '08:30', step: '00:15', end: '18:30', minTime: startTime }"
        />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-select v-model=&quot;value&quot; :picker-options=&quot;{ start: '08:30', step: '00:15', end: '18:30'
            }&quot;&gt;&lt;/el-time-select&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Arbitrary time range</h2>
      <p class="p-md-c my-6">
        Keyfi Zaman Aralığı Seçici, isteğe bağlı bir zaman aralığı seçmenizi sağlar. Bu, örneğin randevu veya etkinlikler için belirli bir başlangıç
        ve bitiş zamanı seçmeniz gerektiğinde kullanışlıdır. Başlangıç ve bitiş zamanlarını kolayca belirleyebilir ve özelleştirebilirsiniz.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-time-picker v-model="arb1" is-range range-separator="den" start-placeholder="Başlangıç zamanı" end-placeholder="Bitiş zamanı" />
        <el-time-picker
          v-model="arb2"
          is-range
          arrow-control
          range-separator="den"
          start-placeholder="Başlangıç zamanı"
          end-placeholder="Bitiş zamanı"
        />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-time-picker is-range v-model="arb1" range-separator="den" start-placeholder="Başlangıç zamanı" end-placeholder="Bitiş zamanı">
            &lt;/el-time-picker>
          </code>
        </p>
      </div>
    </section>

    <h1>DatePicker</h1>
    <section>
      <h2>Enter Date</h2>
      <p class="p-md-c my-6">
        Tarih Seçme bileşeni, kullanıcıların takvimden tarih seçmelerini sağlayan kullanışlı bir araçtır. Bu bileşen, özellikle web uygulamalarında
        tarih seçimi gerektiren durumlarda kullanışlıdır. Kullanıcılar, takvim arayüzü üzerinden bir tarih seçebilir ve seçilen tarih, ilgili uygulama
        işlemleri için kullanılabilir.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-date-picker v-model="value1" type="date" placeholder="Bir gün seçin" />
        <el-date-picker v-model="value2" type="date" placeholder="Bir gün seçin" :picker-options="pickerOptions" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-date-picker v-model=&quot;value1&quot; type=&quot;date&quot; placeholder=&quot;Bir gün seçin&quot;&gt;&lt;/el-date-picker&gt;
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Other measurements</h2>
      <p class="p-md-c my-6">
        Bu bileşen, farklı ölçülerde tarih seçmenizi sağlar. Hafta, ay, yıl ve daha fazlasını seçebilirsiniz. Özelleştirilebilir formatlama
        seçenekleri ile istediğiniz türde tarihleri seçebilirsiniz.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-flow-col auto-cols-max gap-4">
        <el-date-picker v-model="dtp1" class="w-full" type="week" format="Week WW" placeholder="Pick a week" />
        <el-date-picker v-model="dtp2" class="w-full" type="month" placeholder="Pick a month" />
        <el-date-picker v-model="dtp3" class="w-full" type="year" placeholder="Pick a year" />
        <el-date-picker v-model="dtp4" class="w-full" type="dates" placeholder="Pick one or more dates" />
        <el-date-picker v-model="dtp5" class="w-full" type="months" placeholder="Pick one or more months" />
        <el-date-picker v-model="dtp6" class="w-full" type="years" placeholder="Pick one or more years" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-date-picker class="w-full" v-model="dtp1" type="week" format="Hafta WW" placeholder="Bir hafta seçin">&lt;/el-date-picker>
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Date Range</h2>
      <p class="p-md-c my-6">Tarih aralığı seçici, bir başlangıç ve bitiş tarihi seçmenize olanak tanır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-date-picker v-model="datr1" type="daterange" range-separator="To" start-placeholder="Start date" end-placeholder="End date" />
        <el-date-picker
          v-model="datr2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :picker-options="pickerOptions"
          size="small"
        />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-date-picker v-model="value1" type="daterange" range-separator=" - " start-placeholder="Başlangıç tarihi" end-placeholder="Bitiş
            tarihi">&lt;/el-date-picker>
          </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Month Range</h2>
      <p class="p-md-c my-6">Ay aralığı seçici, bir başlangıç ve bitiş ayı seçmenize olanak tanır.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-date-picker v-model="value1" type="monthrange" range-separator=" - " start-placeholder="Başlangıç ayı" end-placeholder="Bitiş ayı" />
        <el-date-picker
          v-model="value2"
          type="monthrange"
          align="right"
          unlink-panels
          range-separator=" - "
          start-placeholder="Başlangıç ayı"
          end-placeholder="Bitiş ayı"
          :picker-options="monthOptions"
        />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-date-picker v-model="value1" type="monthrange" range-separator=" - " start-placeholder="Başlangıç ayı" end-placeholder="Bitiş
            ayı">&lt;/el-date-picker>
          </code>
        </p>
      </div>
    </section>

    <h1>DateTimePicker</h1>
    <section>
      <h2>Date and time</h2>
      <p class="p-md-c my-6">
        DateTimePicker, kullanıcıların tarih ve saat bilgisini seçmelerini sağlayan bir bileşendir. Bu bileşen, DatePicker ve TimePicker
        bileşenlerinden türetilmiştir ve tarih ile saat seçme işlemini tek bir bileşende birleştirir. Daha fazla ayrıntı için pickerOptions ve diğer
        özellikler hakkında bilgi almak için DatePicker ve TimePicker dokümantasyonlarına başvurabilirsiniz.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-date-picker v-model="dat1" type="datetime" placeholder="Select date and time" />
        <el-date-picker v-model="dat2" type="datetime" placeholder="Select date and time" :picker-options="dataAndTimeOptions" />
        <el-date-picker v-model="dat3" type="datetime" placeholder="Select date and time" default-time="12:00:00" />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code> &lt;el-date-picker v-model="dat1" type="datetime" placeholder="Tarih ve saat seçin">&lt;/el-date-picker> </code>
        </p>
      </div>
    </section>

    <section>
      <h2>Date and time range</h2>
      <p class="p-md-c my-6">
        Tarih ve Saat Aralığı Seçici (DateTimePicker), kullanıcılara belirli bir zaman dilimini seçme olanağı sunar. Bu bileşen, özellikle randevu
        veya etkinlik planlaması gibi durumlar için kullanışlıdır. Kullanıcılar başlangıç ve bitiş tarihini veya saati belirleyebilirler.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4">
        <el-date-picker v-model="datr1" type="datetimerange" range-separator="To" start-placeholder="Start date" end-placeholder="End date" />
        <el-date-picker
          v-model="datr2"
          type="datetimerange"
          :picker-options="dateAndTimeRangePickerOption"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          align="right"
        />
      </div>
      <div class="my-4 p-4 border-l-4 border-info-600 bg-info-100">
        <p class="text-xs">
          <code>
            &lt;el-date-picker v-model="datr1" type="datetimerange" range-separator="den" start-placeholder="Başlangıç tarihi" end-placeholder="Bitiş
            tarihi">&lt;/el-date-picker>
          </code>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusButtonSample',
  data() {
    return {
      gridData: [
        {
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City',
        },
        {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City',
        },
        {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City',
        },
        {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City',
        },
      ],
      value: '',
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      arb1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      arb2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime: '',
      endTime: '',
      dataAndTimeOptions: {
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            },
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            },
          },
        ],
      },
      dat1: '',
      dat2: '',
      dat3: '',
      dateAndTimeRangePickerOption: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();

              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();

              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();

              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
      datr1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      datr2: '',
      monthOptions: {
        shortcuts: [
          {
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            },
          },
          {
            text: 'This year',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);

              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: 'Last 6 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();

              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
      pickerOptions: {
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            },
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();

              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            },
          },
        ],
      },
      value1: '',
      value2: '',
      value3: '',
      dtp1: '',
      dtp2: '',
      dtp3: '',
      dtp4: '',
      dtp5: '',
      dtp6: '',
    };
  },
  computed: {
    gridSize() {
      const grids = {
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
      };

      return grids;
    },
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
});
</script>
