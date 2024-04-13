<template>
  <div class="pt-8 pb-16 flex gap-12 flex-col">
    <section>
      <h1>Sizes</h1>
      <p class="p-md-c my-6">
        Avatarlar, resimler, ikonlar veya alfanumerik karakterleri destekler. Avatar'ın şeklini ve boyutunu ayarlamak için `shape` ve `size`
        özelliklerini kullanabilirsiniz. Ayrıca avatarın resim kaynağını belirlemek için `src` özelliğini kullanabilirsiniz. Şekil tipleri
        <b>'circle | square'</b> şeklindedir. Boyutlar ise <b>''large', 'medium', 'small'</b> şeklindedir. Veya boyutu manuel olarak `size` özelliğini
        kullanarak belirleyebilirsiniz, örneğin <b>size='50'</b>.
      </p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <div id="sidebar" data-testid="components-sidebar-eitdurshvb" class="flex flex-col justify-center">
          <nuxt-link :id="'header-logo-' + TP" class="logo-small py-10" to="/" data-testid="header-manager-logo" />
          <el-menu
            id="el-menu-primary"
            class="mt-4"
            data-testid="components-sidebar-afpbszwnwh"
            :default-active="activeMenuItem ? activeMenuItem.toString() : '1'"
            :collapse="isCollapse"
          >
            <el-menu-item data-testid="components-sidebar-ycllqnbrv" index="1" data-index="1">
              <nuxt-link class="el-menu-link" to="/" data-testid="sidebar-dashboard">
                <el-tooltip
                  data-testid="components-sidebar-erxgphehpj"
                  :disabled="true"
                  class="item"
                  effect="dark"
                  content="Dashboard"
                  placement="right"
                >
                  <i class="isax-grid-3" />
                </el-tooltip>
                <span class="el-menu-text">Dashboard</span>
              </nuxt-link>
            </el-menu-item>
            <el-menu-item data-testid="components-sidebar-lhxzcthocp" index="2" data-index="2">
              <nuxt-link class="el-menu-link" to="/users" data-testid="sidebar-users">
                <el-tooltip data-testid="components-sidebar-gegdseotki" :disabled="true" class="item" effect="dark" content="Users" placement="right">
                  <i class="isax-profile-circle" />
                </el-tooltip>
                <span class="el-menu-text">User & Teams</span>
              </nuxt-link>
            </el-menu-item>
            <el-menu-item data-testid="components-sidebar-mpftdiklbu" index="3" data-index="3">
              <nuxt-link class="el-menu-link" to="/devices" data-testid="sidebar-devices">
                <el-tooltip
                  data-testid="components-sidebar-knxsyjfjwd"
                  :disabled="true"
                  class="item"
                  effect="dark"
                  content="Devices"
                  placement="right"
                >
                  <i class="isax-monitor-mobbile" />
                </el-tooltip>
                <span class="el-menu-text">Devices</span>
              </nuxt-link>
            </el-menu-item>

            <el-menu-item v-if="TP === 'berqnet'" data-testid="components-sidebar-yzjnblrbvn" index="4" data-index="4">
              <nuxt-link class="el-menu-link" to="/sites" data-testid="sidebar-sites">
                <el-tooltip data-testid="components-sidebar-usdojbrni" :disabled="true" class="item" effect="dark" content="Sites" placement="right">
                  <i class="isax-driver-2" />
                </el-tooltip>
                <span class="el-menu-text">Sites</span>
              </nuxt-link>
            </el-menu-item>
            <el-menu-item v-else data-testid="components-sidebar-wezwxkkphc" index="4" data-index="4">
              <nuxt-link class="el-menu-link" to="/sites" data-testid="sidebar-sites">
                <el-tooltip data-testid="components-sidebar-qjjhulhbpp" :disabled="true" class="item" effect="dark" content="Sites" placement="right">
                  <i class="isax-driver-2" />
                </el-tooltip>
                <span class="el-menu-text">Sites</span>
              </nuxt-link>
            </el-menu-item>

            <el-submenu data-testid="components-sidebar-tmdvrlndak" class="sub-menus" index="5" data-index="5">
              <template #title>
                <el-tooltip :disabled="true" class="item" effect="dark" content="Insights" placement="right" data-testid="sidebar-rules">
                  <i class="isax-key-square" />
                </el-tooltip>
                <span class="el-menu-text">Rules</span>
              </template>

              <el-menu-item data-testid="components-sidebar-pezlxnffvl" index="5-1" data-index="5-1">
                <nuxt-link class="el-menu-link" to="/rules/firewall" data-testid="sidebar-rules-firewall">
                  <span class="el-menu-text">Firewall</span>
                </nuxt-link>
              </el-menu-item>

              <el-menu-item v-if="TP != 'timus'" data-testid="components-sidebar-jvruigbwdp" index="5-2" data-index="5-2">
                <nuxt-link class="el-menu-link" to="/rules/routes" data-testid="sidebar-rules-routes">
                  <span class="el-menu-text">Routes</span>
                </nuxt-link>
              </el-menu-item>

              <el-menu-item data-testid="components-sidebar-iizzyuvzkh" index="5-3" data-index="5-3">
                <nuxt-link class="el-menu-link" to="/rules/forwarding" data-testid="sidebar-rules-forwarding">
                  <span class="el-menu-text">Forwarding</span>
                </nuxt-link>
              </el-menu-item>

              <!-- <el-menu-item data-testid="components-sidebar-krxfszjkyp"  index="5-4" data-index="5-4">
                        <nuxt-link class="el-menu-link" to="/rules/optimizations" data-testid="sidebar-rules-optimizations">
                            <span class="el-menu-text">{{ $t("sidebar.rules.optimizations.text") }}</span>
                        </nuxt-link>
                    </el-menu-item> -->

              <el-menu-item data-testid="components-sidebar-ptienrknds" index="5-4" data-index="5-4">
                <nuxt-link class="el-menu-link" to="/rules/acls" data-testid="sidebar-rules-acls">
                  <span class="el-menu-text">Access Control List</span>
                </nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu data-testid="components-sidebar-bnihbcpjuh" class="sub-menus" index="6" data-index="6">
              <template #title>
                <el-tooltip :disabled="true" class="item" effect="dark" content="Ztna" placement="right" data-testid="sidebar-ztna">
                  <i class="isax-shield" />
                </el-tooltip>
                <span class="el-menu-text">Zero Trust Security</span>
              </template>
              <el-menu-item data-testid="components-sidebar-nettrmotu" index="6-1" data-index="6-1">
                <nuxt-link class="el-menu-link" to="/ztna/dashboard" data-testid="sidebar-ztna-dashboard">
                  <span class="el-menu-text">Dashboard</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-svzpertkjn" index="6-2" data-index="6-2">
                <nuxt-link class="el-menu-link" to="/ztna/behavior-detection" data-testid="sidebar-ztna-behavior">
                  <span class="el-menu-text">Behaviors</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-voglodqvvx" index="6-3" data-index="6-3">
                <nuxt-link class="el-menu-link" to="/ztna/user-sign-on-policies" data-testid="sidebar-ztna-user-sign-on">
                  <span class="el-menu-text">User Sign-In Policies</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-vzizrrtpzn" index="6-4" data-index="6-4">
                <nuxt-link class="el-menu-link" to="/ztna/admin-sign-on-policies" data-testid="sidebar-ztna-admin-sign-on">
                  <span class="el-menu-text">Admin Sign-In Policies</span>
                </nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu data-testid="components-sidebar-neymnnlec" class="sub-menus" index="7" data-index="7">
              <template #title>
                <el-tooltip :disabled="true" class="item" effect="dark" content="Insights" placement="right" data-testid="sidebar-insights">
                  <i class="isax-folder-open" />
                </el-tooltip>
                <span class="el-menu-text">Insights</span>
              </template>

              <el-menu-item data-testid="components-sidebar-mtklcicmi" index="7-1" data-index="7-1">
                <nuxt-link class="el-menu-link" to="/insights/alerts" data-testid="sidebar-insights-alerts">
                  <span class="el-menu-text">Alerts</span>
                </nuxt-link>
              </el-menu-item>

              <!-- <el-menu-item data-testid="components-sidebar-pfrrtymjti"  index="7-2" data-index="7-2">
                        <nuxt-link class="el-menu-link" to="/insights/threats" data-testid="sidebar-threats">
                            <span class="el-menu-text">{{ $t("sidebar.threats.text") }}</span>
                        </nuxt-link>
                    </el-menu-item> -->

              <el-menu-item data-testid="components-sidebar-selflhiujn" index="7-3" data-index="7-3">
                <nuxt-link class="el-menu-link" to="/insights/traffic" data-testid="sidebar-insights-all-traffic">
                  <span class="el-menu-text">Traffic Logs</span>
                </nuxt-link>
              </el-menu-item>

              <el-menu-item data-testid="components-sidebar-toksfhzzfq" index="7-4" data-index="7-4">
                <nuxt-link class="el-menu-link" to="/insights/events" data-testid="sidebar-insights-events">
                  <span class="el-menu-text">Events</span>
                </nuxt-link>
              </el-menu-item>

              <el-menu-item data-testid="components-sidebar-cnudlizsfg" index="7-5" data-index="7-5">
                <nuxt-link class="el-menu-link" to="/insights/reports" data-testid="sidebar-insights-automate-reports">
                  <span class="el-menu-text">Automated Reports</span>
                </nuxt-link>
              </el-menu-item>

              <el-menu-item data-testid="components-sidebar-kvhegftktx" index="7-6" data-index="7-6">
                <nuxt-link class="el-menu-link" to="/insights/blocked-ips" data-testid="sidebar-insights-blocked-ips">
                  <span class="el-menu-text">Blocked Ip Addresses</span>
                </nuxt-link>
              </el-menu-item>

              <el-menu-item v-if="TP != 'timus'" data-testid="components-sidebar-ewrnsjeynv" index="7-7" data-index="7-7">
                <nuxt-link class="el-menu-link" to="/insights/signed-logs" data-testid="sidebar-insights-signed-logs">
                  <span class="el-menu-text">{{ $t('sidebar.insights.signed_logs.text') }}</span>
                </nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu data-testid="components-sidebar-jcaexatpod" class="sub-menus" index="8" data-index="8">
              <template #title>
                <el-tooltip :disabled="true" class="item" effect="dark" content="Settings" placement="right" data-testid="sidebar-settings">
                  <i class="isax-setting-2" />
                </el-tooltip>
                <span class="el-menu-text">Settings</span>
              </template>
              <el-menu-item v-if="TP != 'timus'" data-testid="components-sidebar-fswikkipil" index="8-1" data-index="8-1">
                <nuxt-link class="el-menu-link" to="/settings/captive-portals" data-testid="sidebar-settings-captive-portal">
                  <span class="el-menu-text">Captive Portal</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-rcngltetam" index="8-2" data-index="8-2">
                <nuxt-link class="el-menu-link" to="/settings/integrations" data-testid="sidebar-settings-integrations">
                  <span class="el-menu-text">Integrations</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-zvuhmrdamh" index="8-3" data-index="8-3">
                <nuxt-link class="el-menu-link" to="/settings/configuration" data-testid="sidebar-settings-configuration">
                  <span class="el-menu-text">Configuration</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-sjavprmmmj" index="8-4" data-index="8-4">
                <nuxt-link class="el-menu-link" to="/settings/administrators" data-testid="sidebar-settings-administrators">
                  <span class="el-menu-text">Administrators</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-iywlhkkmta" index="8-5" data-index="8-5">
                <nuxt-link class="el-menu-link" to="/settings/organization" data-testid="sidebar-settings-organization">
                  <span class="el-menu-text">Organization</span>
                </nuxt-link>
              </el-menu-item>
              <el-menu-item data-testid="components-sidebar-yxbnijbpmj" index="8-6" data-index="8-6">
                <nuxt-link class="el-menu-link" to="/settings/downloads" data-testid="sidebar-settings-downloads">
                  <span class="el-menu-text">Downloads</span>
                </nuxt-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-avatar :size="50"&gt;SK&lt;/el-avatar&gt;</code>
        </p>
      </div>
    </section>

    <section>
      <h1>Types</h1>
      <p class="p-md-c my-6">You can use any 'string' expression within the tag, in addition to a type that accepts 'src' or 'icon' as a property.</p>
      <div class="grid grid-flow-col auto-cols-max gap-4 items-center">
        <el-avatar icon="isax-add-circle" />
        <el-avatar icon="isax-add-circle" size="large" />
        <el-avatar :src="url" />
        <el-avatar>SK</el-avatar>
      </div>
      <div class="my-4 p-4 border-l-4 border-blue-600 bg-blue-100">
        <p class="text-xs">
          <code>&lt;el-avatar icon="isax-add-circle" size="large"&gt;&lt;/el-avatar&gt;</code>
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TimusCascader',
  data() {
    return {
      activeMenuItem: 1,
      TP: 'timus',
      isCollapse: false,
      url: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Princess',
      sizeList: ['large', 'medium', 'small'],
    };
  },
});
</script>
