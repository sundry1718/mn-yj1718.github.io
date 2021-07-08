<div class="cptt"><a href="list.php?tid={dede:field name='id'/}" >{dede:field name='typename'/}</a></div>
  <div class="news">
    <ul>
      {dede:arclist titlelen='55' row='5'}
      <li><a href="view.php?aid=[field:id/]" title="[field:title /]">[field:title /]</a></li>
      {/dede:arclist}
    </ul>
  </div>