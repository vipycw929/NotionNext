import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  // 已自定义版权信息，原始代码已注释
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      © 2026 我的博客
    </div>
  )

  // 以下为原始代码（已注释）
  // return (
  //   <div className={`inline text-sm font-serif ${props.className || ''}`}>
  //     <span className='mr-1'>Powered by</span>
  //     <a
  //       href='https://github.com/tangly1024/NotionNext'
  //       className='underline justify-start'>
  //       NotionNext {siteConfig('VERSION')}
  //     </a>
  //     .
  //   </div>
  // )
}
