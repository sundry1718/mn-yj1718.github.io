<dl>
          <dt> <a href="{dede:field name='typeurl'/}"> <strong>{dede:field name='typename'/}</strong></a> </dt>
          {dede:sql sql='Select * from dede_arctype where reid=~id~'}
          <dd> <a href="[field:typeurl/]">[field:typename/]</a></dd>
          {/dede:sql}
        </dl>