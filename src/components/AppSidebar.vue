<template>
  <aside>
    <ul class="category-list">
      <li class="category-list-item">
        <a href="#">Название категории</a>
        <span>3</span>
      </li>
      <ul class="sub-category-list">
        <li class="sub-category-list-item">
          <a href="#">Название подкатегории</a>
          <span>3</span>
        </li>
        <li class="sub-category-list-item">
          <a href="#">Название подкатегории</a>
          <span>3</span>
        </li>
        <li class="sub-category-list-item selected">
          <a href="#">Название подкатегории</a>
          <span>3</span>
        </li>
      </ul>
    </ul>
    <div class="filter">
      <h3 class="filter-title">Цена</h3>
      <div class="filter-price">
        <div>
          <span>от</span>
          <input type="text" />
        </div>
        <div class="filter-blank">–</div>
        <div>
          <span>до</span>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="filter">
      <div class="filter-header">
        <h3 class="filter-title">Бренд</h3>
        <button type="button" class="filter-reset">Очистить</button>
      </div>
      <div class="filter-search">
        <img src="/searchSecondary.svg" alt="search" />
        <input type="text" placeholder="Поиск" />
      </div>
      <div class="filter-attrs">
        <ul>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="filter">
      <h3 class="filter-title">Размер</h3>
      <div class="filter-attrs">
        <ul>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
          <li class="filter-attrs-item">
            <div>
              <input id="checkbox" type="checkbox" />
              <label for="checkbox">Атрибут</label>
            </div>
            <span>3</span>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>
