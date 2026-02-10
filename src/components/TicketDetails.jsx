import {
  Mail,
  Eye,
  MoreHorizontal,
  Bold,
  Italic,
  Underline,
  Image,
  Paperclip,
  Link,
  Code,
  Send,
  ChevronDown,
} from "lucide-react";

export default function TicketDetails() {
  return (
    <main className="flex-1 bg-slate-50 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-lg font-semibold text-slate-900">
          Laudantium neque veritatis
        </h1>

        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
          <span>OPS-102 (100669518)</span>
          <span>|</span>
          <span>Created 11/14/22 12:32 PST</span>

          <div className="flex items-center gap-3 ml-auto text-slate-400">
            <Mail size={16} />
            <Eye size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>
      </div>

      {/* Reply MessageBox */}
      <div className="p-6">
        <div className="bg-white border border-slate-200 rounded-lg">
          {/* Different Tabs */}
          <div className="flex border-b border-slate-200 text-sm">
            <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
              Public Reply
            </button>
            <button className="px-4 py-2 text-slate-500">
              Private Comment
            </button>
          </div>

          <div className="px-4 py-3 border-b border-slate-200 text-sm flex items-center justify-between">
            <div>
              <span className="text-slate-500 mr-2">To:</span>
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                Allison Westervelt &lt;awestervelt@email.com&gt;
                <span className="cursor-pointer">×</span>
              </span>
            </div>
            <span className="text-blue-600 text-xs cursor-pointer">
              Cc
            </span>
          </div>

          {/* Editing option */}
          <textarea
            placeholder="Add a reply..."
            className="w-full px-4 py-4 text-sm resize-none outline-none min-h-[120px]"
          />

          {/* Operations bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-slate-200 text-slate-500">
            <div className="flex items-center gap-3">
              <Bold size={14} />
              <Italic size={14} />
              <Underline size={14} />
              <Image size={14} />
              <Paperclip size={14} />
              <Link size={14} />
              <Code size={14} />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-blue-600 cursor-pointer">
                Add to KB
              </span>
              <input type="checkbox" />
              <button className="bg-blue-600 text-white p-1.5 rounded">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message Box */}
      <div className="px-6 space-y-4 pb-6">
        {/* Message 1 */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-start gap-3">
              {/* circle button */}
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                AH
              </div>

              {/* Name and  Date */}
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Allie Harmon
                </p>
                <p className="text-xs text-slate-500">
                  Feb 9, 2022 10:31 AM
                </p>
              </div>
            </div>

            {/* Dropdown button */}
            <ChevronDown
              size={16}
              className="text-slate-400 cursor-pointer"
            />
          </div>

          <p className="text-sm text-slate-700 mb-3">
            Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem
            recusandae. Maxime beatae nostrum ut.
          </p>

          {/* screenhot attachements */}
          <div className="flex gap-2">
            <div className=" rounded-xl px-3 py-1 text-xs bg-slate-200 border border-slate-400 pr-10">
              Screen_shot.png
              <div className="text-slate-400">
                16 Jun 2022, 1:30 PM
              </div>
            </div>
            <div className=" rounded-xl px-3 py-1 text-xs bg-slate-200 border border-slate-400 pr-10">
              Screen_shot.png
              <div className="text-slate-400">
                16 Jun 2022, 1:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Message 2 */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                AH
              </div>

              <div>
                <p className="text-sm font-semibold leading-tight">
                  Allie Harmon
                </p>
                <p className="text-xs text-slate-500">
                  Feb 9, 2022 10:31 AM
                </p>
              </div>
            </div>

            <ChevronDown
              size={16}
              className="text-slate-400 cursor-pointer"
            />
          </div>

          <p className="text-sm text-slate-700">
            Dolorem similique et aliquid illum dolor. Vel quo magnam.
          </p>
        </div>
      </div>
    </main>
  );
}
