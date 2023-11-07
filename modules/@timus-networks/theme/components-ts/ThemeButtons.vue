<template>
  <div>
    <h2 class="mt-12">Fill Button</h2>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary" class="isax-airdrop icon-right">Primary</el-button>
      <el-button type="text" class="danger">Text</el-button>
      <el-button type="light">Light</el-button>
      <el-button type="gray">Gray</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <h2 class="mt-12">Outline Button</h2>
    <el-row>
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="light" plain>Light</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <h2 class="mt-12">Ghost Button</h2>
    <el-row>
      <el-button type="primary" class="ghost">Plain</el-button>
      <el-button type="primary" class="ghost">Primary</el-button>
      <el-button type="success" class="ghost">Success</el-button>
      <el-button type="info" class="ghost">Info</el-button>
      <el-button type="light" class="ghost">Light</el-button>
      <el-button type="warning" class="ghost">Warning</el-button>
      <el-button type="danger" class="ghost">Danger</el-button>
    </el-row>

    <h2 class="mt-12">Sized Button</h2>
    <el-row>
      <el-button>Default</el-button>
      <el-button size="large">Large</el-button>
      <el-button size="medium">Medium</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="mini">Mini</el-button>
    </el-row>

    <h2 class="mt-12">Rounded Sized Button</h2>
    <el-row>
      <el-button round>Default</el-button>
      <el-button size="medium" round>Medium</el-button>
      <el-button size="small" round>Small</el-button>
      <el-button size="mini" round>Mini</el-button>
    </el-row>

    <h2 class="mt-12">Disabled Sized Button</h2>
    <el-row>
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>Plain</el-button>
      <el-button type="primary" plain disabled>Primary</el-button>
      <el-button type="success" plain disabled>Success</el-button>
      <el-button type="info" plain disabled>Info</el-button>
      <el-button type="warning" plain disabled>Warning</el-button>
      <el-button type="danger" plain disabled>Danger</el-button>
    </el-row>

    <h2 class="mt-12">Icon Button</h2>
    <el-row>
      <el-button type="primary" class="isax-trash"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">Search</el-button>
      <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
    </el-row>
  </div>
</template>
