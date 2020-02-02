<template>
  <div class="car-preview-card">
    <div class="card" >
      <div class="card-image">
        <slot name="card-image"></slot>
      </div>
      <div class="card-content">
          <slot name="card-content"></slot>
      </div>

      <footer class="card-footer">
          <slot name="card-footer"></slot>
      </footer>
    </div>
  </div>
</template>
